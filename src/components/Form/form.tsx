import React, { ReactFragment } from 'react';
import Input from '@/components/Form/Input';
import { scopedClassMaker } from '@/helper/classes';
import './form.scss';

export interface FormValue {
  [K: string]: string;
}

interface Props {
  value: FormValue;
  fields: Array<{ name: string; label: string; input: { type: string } }>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  errors: { [K: string]: string[] };
}

const scopedClass = scopedClassMaker('gulu-form');
const sc = scopedClass;
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
    <form onSubmit={onSubmit} className={sc('')}>
      <table>
        {props.fields.map(item => (
          <tr key={item.name} className={sc('tr')}>
            <td className={sc('td')}>{item.label}</td>
            <td className={sc('td')}>
              <Input
                type={item.input.type}
                value={formData[item.name]}
                onChange={e => onInputChange(item.name, e.target.value)}
              />
              <span>{props.errors[item.name]}</span>
            </td>
          </tr>
        ))}
        <tr className={sc('tr')}>
          <td className={sc('td')} />
          <td className={sc('td')}>{props.buttons}</td>
        </tr>
      </table>
    </form>
  );
};
export default Form;
