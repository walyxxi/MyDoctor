import {useState} from 'react';

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (key, value) =>
      key === 'reset'
        ? setValues(initialValues)
        : setValues({...values, [key]: value}),
  ];
};
