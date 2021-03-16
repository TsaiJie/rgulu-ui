## Form

### 1 默认用法

```tsx
import React, { useState, Fragment } from 'react';
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
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      { key: 'username', required: true },
      { key: 'username', minLength: 8, maxLength: 16 },
      { key: 'username', pattern: /^[A-Za-z0-9]+$/ },
      { key: 'password', required: true },
    ];
    const errors: FormErrors = Validator(formData, rules);
    if (noError(errors)) {
      console.log(errors);
    }
    setErrors(errors);
  };
  console.log(FormValue);
  return (
    <Fragment>
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
        onChange={newValue => setFormData(newValue)}
        onSubmit={onSubmit}
        errors={errors}
      />
    </Fragment>
  );
};
```
