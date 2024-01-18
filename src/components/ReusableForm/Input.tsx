import React from 'react';

export const Input = ({ label, register, errors, type, placeholder }) => {
  const fieldName = register.name || 'name'; 
  console.log(register)

  return (
    <div className="w-full max-w-md">
      <label className="block text-red-600 font-bold rounded-s-md" htmlFor={fieldName}>
        {label}
      </label>
      <input
        className="formInput"
        type={type}
        id={fieldName}
        placeholder={placeholder}
        {...register}
      ></input>
      {errors[fieldName] && (
        <span className="text-red-600 text-sm">
          {errors[fieldName].message}
        </span>
      )}
    </div>
  );
};
