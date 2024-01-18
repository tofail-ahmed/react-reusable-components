import React from "react";

const Checkbox = ({ register, errors, label,id }) => {
      console.log(errors)
  return (
    <div className="w-full ">
      <div className="flex items-center gap-2">
      <label className="block text-red-600 text-md font-bold" htmlFor={id}>
        {label}
      </label>
      <input
        type="checkbox"
        id={id}
        {...register}
        />
       
      </div>
        {errors.terms && (
          <span className="text-red-600 text-sm">{errors.terms.message}</span>
        )}
    </div>
  );
};

export default Checkbox;
