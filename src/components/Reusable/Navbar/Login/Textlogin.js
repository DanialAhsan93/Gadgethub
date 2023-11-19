import React from 'react';
import { ErrorMessage, useField } from 'formik';
import './login.css';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;

  return (
    <>
      <div className='input-class'>
        <div className="py-2">
          <label htmlFor={field.name}>{label}</label>
          <input
            className={`form-control shadow-none ${hasError ? 'is-invalid' : ''}`}
            {...field}
            {...props}
            autoComplete="off"
            onChange={field.onChange} // Track changes
            onBlur={field.onBlur} // Track blur
          />
        </div>
        <div style={{ visibility: hasError ? 'visible' : 'hidden' }} className="error">
          <ErrorMessage name={field.name} />
        </div>
      </div>
    </>
  );
};
