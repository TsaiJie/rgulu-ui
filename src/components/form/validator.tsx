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
  let errors: { [key: string]: OneError[] } = {};
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
  /*
    errors
  * {
  *   username: [e1, e2, e3],
  *   password: [e4, e5]
  * }
  * =>
   x
   [
     [["username", e1], ["username", e2],["username", e3]],
     [["password", e4], ["password", e5]]
   ]
   y
   [
    ["username", e1], ["username", e2],["username", e3],["password", e4], ["password", e5]
   ]
   把["username", e1]变为 Promise<[u1, p1]>
  z
  [promise, promise, promise]
  把 z传给Promise.all()
  * zip
  {
    password: ["密码重复了", "密码重复了"]
    username: ["账号重复了", "账号重复了"]
  }
  *
  * */
  const x = Object.keys(errors).map(key => {
    // ["username", "password"]
    return errors[key].map<[string, OneError]>(
      (error: Promise<string> | string) => [key, error],
    );
  });
  const y = flat(x);
  // 让[] 形成新的promise 需要让这个promise永远不出错
  const z = y.map((item: [string, string | Promise<string>]) => {
    const key = item[0];
    const promiseOrString = item[1];
    const promise =
      promiseOrString instanceof Promise
        ? promiseOrString
        : Promise.reject(promiseOrString);
    return promise.then<[string, undefined], [string, string]>(
      () => [key, undefined],
      (reason: string) => [key, reason],
    );
  });
  // 类型守卫 guard
  function isError(
    item: [string, undefined] | [string, string],
  ): item is [string, string] {
    return typeof item[1] === 'string';
  }
  Promise.all(z).then(results => {
    // results = [["username", undefined], ["password", "too long"]]
    callback(zip(results.filter<[string, string]>(isError)));
  });
};

export default Validator;

// kvList = [["username", "账号重复了"],["password", "密码重复了"] ]
function zip(kvList: Array<[string, string]>) {
  const result: { [key: string]: string[] } = {};
  kvList.map(([key, value]) => {
    result[key] = result[key] || [];
    result[key].push(value);
  });
  return result;
}

function flat<T>(array: Array<T | T[]>) {
  const result: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      // T[]
      result.push(...(array[i] as T[]));
    } else {
      // T
      result.push(array[i] as T);
    }
  }
  return result;
}

//
// function formEntries(array: Array<[string, string[]]>) {
//   const result: { [key: string]: string[] } = {};
//   for (let i = 0; i < array.length; i++) {
//     result[array[i][0]] = array[i][1];
//   }
//   return result;
// }
