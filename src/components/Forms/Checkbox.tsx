import React from "react";

const Checkbox = ({ register, errors, label,id }) => {
  return (
    <div className="w-full ">
      <div className="flex items-center gap-2">
      <label className="block text-gray-700" htmlFor={id}>
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
