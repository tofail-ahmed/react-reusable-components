import React from 'react';


// type TInput = {
//   label: string,
//   register: object,
//   errors: object,
//   type: string,
//   placeholder: string,
 
// };
export const Input = ({label,register,errors,type,placeholder,}) => {
      return (
            <div className= 'w-full max-w-md'>
            <label
              className=" block  text-red-600 font-bold  rounded-s-md"
              htmlFor="name"
            >
              {label}
            </label>
            <input
              className="formInput"
              type={type}
              id="name"
              placeholder={placeholder}
              {...register}
            ></input>
            {errors.name && (
              <span className="text-red-600 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
      );
};

