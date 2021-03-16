import { FormValue } from './form';

interface FormRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
}

interface FormErrors {
  [k: string]: string[];
}

type FormRules = Array<FormRule>;

function isEmpty(value: unknown) {
  return value === undefined || value === null || value === '';
}
export function noError(errors: any) {
  return Object.keys(errors).length === 0;
}

const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
  let errors: FormErrors = {};
  const addError = (key: string, message: string) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(message);
  };
  rules.map(rule => {
    const value = formValue[rule.key];
    if (rule.required && isEmpty(value)) {
      addError(rule.key, '必填');
    }
    if (rule.minLength && !isEmpty(value) && value!.length < rule.minLength) {
      addError(rule.key, '太短');
    }
    if (rule.maxLength && !isEmpty(value) && value!.length > rule.maxLength) {
      addError(rule.key, '太长');
    }
    if (rule.pattern && !rule.pattern.test(value)) {
      addError(rule.key, '格式不合法');
    }
  });
  return errors;
};

export default Validator;
