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
      const promise = rule.validator.validate(value);
      addError(rule.key, { message: rule.validator.name, promise });
    }
    if (rule.required && isEmpty(value)) {
      addError(rule.key, { message: '必填' });
    }
    if (rule.minLength && !isEmpty(value) && value!.length < rule.minLength) {
      addError(rule.key, { message: '字符太短了' });
    }
    if (rule.maxLength && !isEmpty(value) && value!.length > rule.maxLength) {
      addError(rule.key, { message: '字符太长了' });
    }
    if (rule.pattern && !rule.pattern.test(value)) {
      addError(rule.key, { message: '格式不正确' });
    }
  });
  //找到值为
  const messageAndPromiseList = flat(Object.values(errors))
    .filter(item => item.promise)
    .map(item => ({ promise: item.promise, message: item.message }));
  const promiseList = messageAndPromiseList.map(item => item.promise);
  const messageWithPromiseList = messageAndPromiseList.map(
    item => item.message,
  );
  const x = (data?: any) => {
    outer: for (let i = 0; i < messageWithPromiseList.length; i++) {
      const message = messageWithPromiseList[i];
      const errorsList = Object.keys(errors);
      for (let j = 0; j < errorsList.length; j++) {
        const key = errorsList[j];
        for (let k = 0; k < errors[key].length; k++) {
          const item = errors[key][k];
          if (item.message === message) {
            item.message = data;
            break outer;
          }
        }
      }
    }

    const newErrors = Object.keys(errors).map<[string, string[]]>(key => {
      // key username/ password
      // errors[key] / []
      return [key, errors[key].map((item: OneError) => item.message)];
    });
    callback(formEntries(newErrors));
  };
  if (promiseList.length === 0) {
    x();
  } else {
    promiseList.forEach(async promise => await promise.then(x, x));
  }
  // Promise.all(promiseList).then(x, x);
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
  for (let i = 0; i < array.length; i++) {
    result[array[i][0]] = array[i][1];
  }
  return result;
}
