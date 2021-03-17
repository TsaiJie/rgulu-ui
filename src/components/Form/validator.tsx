import { FormValue } from './form';

interface FormRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  validator?: {
    name: string;
    validate: (value: string) => Promise<void>;
  };
}

interface OneError {
  message: string;
  promise?: Promise<any>;
}

type FormRules = Array<FormRule>;

function isEmpty(value: unknown) {
  console.log('isEmpty', value);
  return value === undefined || value === null || value === '';
}

export function noError(errors: any) {
  return Object.keys(errors).length === 0;
}

const Validator = (
  formValue: FormValue,
  rules: FormRules,
  callback: (errors: any) => void,
) => {
  let errors: any = {};
  const addError = (key: string, error: OneError) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(error);
  };
  rules.map(rule => {
    const value = formValue[rule.key];
    if (rule.validator) {
      //自定义的校验器
      console.log(value, formValue);
      const promise = rule.validator.validate(value);
      addError(rule.key, { message: '用户名已存在', promise });
    }
    if (rule.required && isEmpty(value)) {
      console.log('required', value);
      addError(rule.key, { message: '必填' });
    }
    if (rule.minLength && !isEmpty(value) && value!.length < rule.minLength) {
      addError(rule.key, { message: '太短了' });
    }
    if (rule.maxLength && !isEmpty(value) && value!.length > rule.maxLength) {
      addError(rule.key, { message: '太长了' });
    }
    if (rule.pattern && !rule.pattern.test(value)) {
      addError(rule.key, { message: '格式不正确' });
    }
  });
  const promiseList = flat(Object.values(errors))
    .filter(item => item.promise)
    .map(item => item.promise);
  Promise.all(promiseList)
    .then(() => {
      const newErrors = Object.keys(errors).map<[string, string[]]>(key => {
        // key username/ password
        // errors[key] / []
        return [key, errors[key].map((item: OneError) => item.message)];
      });
      callback(formEntries(newErrors));
    })
    .catch(() => {
      const newErrors = Object.keys(errors).map<[string, string[]]>(key => {
        // key username/ password
        // errors[key] / []
        return [key, errors[key].map((item: OneError) => item.message)];
      });
      callback(formEntries(newErrors));
    });
};

export default Validator;

function flat(array: Array<any>) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result.push(...array[i]);
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

function formEntries(array: Array<[string, string[]]>) {
  const result: { [key: string]: string[] } = {};
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    result[array[i][0]] = array[i][1];
  }
  return result;
}
