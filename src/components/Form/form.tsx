import React, { ReactFragment } from 'react';
export interface FormValue {
  [K: string]: unknown;
}
interface Props {
  value: FormValue;
  fields: Array<{ name: string; label: string; input: { type: string } }>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  errors: { [K: string]: string[] };
}
const Form: React.FunctionComponent<Props> = props => {
  const formData = props.value;
  const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    props.onSubmit(e);
  };
  const onInputChange = (name: string, value: string) => {
    const newFormValue = { ...formData, [name]: value };
    props.onChange(newFormValue);
  };
  return (
    <form onSubmit={onSubmit}>
      {props.fields.map(item => (
        <div key={item.name}>
          {item.label}
          <input
            type={item.input.type}
            value={formData[item.name]}
            onChange={e => onInputChange(item.name, e.target.value)}
          />
          <span>{props.errors[item.name]}</span>
        </div>
      ))}
      <div>{props.buttons}</div>
    </form>
  );
};
export default Form;
