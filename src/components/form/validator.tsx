import { FormValue } from './form';

interface FormRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  validator?: (value: string) => Promise<string>;
}

type OneError = string | Promise<string>;
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
      const promise = rule.validator(value);
      addError(rule.key, promise);
    }
    if (rule.required && isEmpty(value)) {
      addError(rule.key, '必填');
    }
    if (rule.minLength && !isEmpty(value) && value!.length < rule.minLength) {
      addError(rule.key, '字符太短了');
    }
    if (rule.maxLength && !isEmpty(value) && value!.length > rule.maxLength) {
      addError(rule.key, '字符太长了');
    }
    if (rule.pattern && !rule.pattern.test(value)) {
      addError(rule.key, '格式不正确');
    }
  });
  console.log('errors', errors);
};

export default Validator;

// function flat(array: Array<any>) {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       result.push(...array[i]);
//     } else {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }
//
// function formEntries(array: Array<[string, string[]]>) {
//   const result: { [key: string]: string[] } = {};
//   for (let i = 0; i < array.length; i++) {
//     result[array[i][0]] = array[i][1];
//   }
//   return result;
// }
