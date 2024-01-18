import React from "react";

const RadioButton = ({ register, options, id, errors, head }) => {
  return (
    <div className="w-full max-w-md">
      <div>
        <span className="text-md font-bold text-red-700 me-2">{head}</span>
        {options.map((option) => (
          <React.Fragment key={option.value}>
            <input type="radio" id={id} value={option.value} {...register} />
            <label htmlFor={option.value}>{option.label}</label>
          </React.Fragment>
        ))}
      </div>
      {errors.gender && (
        <span className="text-red-600 text-sm">{errors.gender.message}</span>
      )}
    </div>
  );
};

export default RadioButton;
