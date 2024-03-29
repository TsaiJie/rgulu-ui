## Form

### 1 基本用法

```tsx
import React, { useState, Fragment, useCallback } from 'react';
import { Form, Button, FormValue, Validator, noError } from 'rgulu-ui';

export default () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: '',
  });
  const [fields] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ]);
  const [errors, setErrors] = useState({});
  const rules = [
    { key: 'username', required: true },
    { key: 'username', minLength: 8, maxLength: 16 },
    { key: 'username', pattern: /^[A-Za-z0-9]+$/ },
    { key: 'password', required: true },
    { key: 'password', required: true },
  ];

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      Validator(formData, rules, errors => {
        if (noError(errors)) {
          console.log(errors);
        }
        setErrors(errors);
      });
    },
    [formData, rules],
  );
  const onChange = useCallback(newValue => {
    setFormData({ ...newValue });
  }, []);
  return (
    <Fragment>
      {/*{JSON.stringify(errors)}*/}
      <Form
        value={formData}
        fields={fields}
        buttons={
          <Fragment>
            <Button type="submit" level={'main'}>
              提交
            </Button>
            <Button>返回</Button>
          </Fragment>
        }
        onChange={newValue => onChange(newValue)}
        onSubmit={onSubmit}
        errors={errors}
      />
    </Fragment>
  );
};
```

### 2 支持异步校验

```tsx
import React, { useState, Fragment, useCallback } from 'react';
import { Form, Button, FormValue, Validator, noError } from 'rgulu-ui';

const usernames = ['frank', 'jackjack', 'alice', 'bob'];
const passwords = ['1234', '5678'];
const checkUserName = (
  username: string,
  succeed: () => void,
  fail: () => void,
) => {
  setTimeout(() => {
    if (usernames.indexOf(username) >= 0) {
      fail();
    } else {
      succeed();
    }
  }, 200);
};
const checkPassword = (
  password: string,
  succeed: () => void,
  fail: () => void,
) => {
  setTimeout(() => {
    if (passwords.indexOf(password) >= 0) {
      fail();
    } else {
      succeed();
    }
  }, 500);
};
const validator = (username: string) => {
  return new Promise<string>((resolve, reject) => {
    checkUserName(username, resolve, () => reject('账号重复了'));
  });
};
const validatorPassword = (password: string) => {
  console.log('1111');
  return new Promise<string>((resolve, reject) => {
    checkPassword(password, resolve, () => reject('密码重复了'));
  });
};
export default () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: '',
  });
  const [fields] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ]);
  const [errors, setErrors] = useState({});
  const rules = [
    { key: 'username', required: true },
    { key: 'username', minLength: 8, maxLength: 16 },
    { key: 'username', pattern: /^[A-Za-z0-9]+$/ },
    { key: 'username', validator },
    { key: 'username', validator },
    { key: 'password', required: true },
    { key: 'password', validator: validatorPassword },
    { key: 'password', validator: validatorPassword },
  ];

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      Validator(formData, rules, errors => {
        if (noError(errors)) {
          console.log(errors);
        }
        setErrors(errors);
      });
    },
    [formData],
  );
  const onChange = useCallback(newValue => {
    setFormData({ ...newValue });
  }, []);
  return (
    <Fragment>
      {/*{JSON.stringify(errors) }*/}
      <Form
        value={formData}
        fields={fields}
        buttons={
          <Fragment>
            <Button type="submit" level={'main'}>
              提交
            </Button>
            <Button>返回</Button>
          </Fragment>
        }
        onChange={newValue => onChange(newValue)}
        onSubmit={onSubmit}
        errors={errors}
      />
    </Fragment>
  );
};
```
