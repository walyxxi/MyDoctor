import {useState} from 'react';

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (key, value) => {
      return setValues({...values, [key]: value});
    },
  ];
};
