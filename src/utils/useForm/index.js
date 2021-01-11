import {useState} from 'react';

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  return [
    values,
    (nameForm, formValue) => {
      if (nameForm === 'reset') {
        return setValues(initialValue);
      }
      return setValues({
        ...values,
        [nameForm]: formValue,
      });
    },
  ];
};
