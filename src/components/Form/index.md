## Form

### 1 默认用法

```tsx
import React, { useState, Fragment, useCallback } from 'react';
import { Form, Button, FormValue, Validator, noError } from 'rgulu-ui';

const usernames = ['frank', 'jack', 'alice', 'bob'];
const checkUserName = (
  username: string,
  succeed: () => void,
  fail: () => void,
) => {
  setTimeout(() => {
    console.log(
      '我现在知道用户名是否存在',
      username,
      usernames.indexOf(username),
    );
    if (usernames.indexOf(username) >= 0) {
      succeed();
    } else {
      fail();
    }
  }, 1000);
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
    {
      key: 'username',
      validator: {
        name: 'unique',
        validate(username: string) {
          console.log('有人调用了validate');
          return new Promise<void>((resolve, reject) => {
            checkUserName(username, resolve, reject);
          });
        },
      },
    },
    { key: 'username', pattern: /^[A-Za-z0-9]+$/ },
    { key: 'password', required: true },
  ];

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      Validator(formData, rules, errors => {
        console.log('errors', errors);
        if (noError(errors)) {
          console.log(errors);
        }
        setErrors(errors);
      });
    },
    [formData],
  );
  const onChange = useCallback(newValue => {
    // const errors: FormErrors = Validator(newValue, rules);
    setFormData({ ...newValue });
    // setErrors(errors);
  }, []);
  return (
    <Fragment>
      {JSON.stringify(errors)}
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
