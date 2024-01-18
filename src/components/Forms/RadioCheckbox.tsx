import React from "react";

const RadioCheckbox = ({ label, type, register, errors, options, ...inputProps }) => {
  return (
    <div className="w-[70%] max-w-md">
      <label className="block text-red-600 font-bold rounded-s-md" htmlFor={inputProps.id || inputProps.name}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea id={inputProps.id || inputProps.name} {...register} {...inputProps}></textarea>
      ) : type === "select" ? (
        <select id={inputProps.id || inputProps.name} {...register}>
          <option value="">{`Select ${label}`}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "checkbox" ? (
        <input type="checkbox" {...register} {...inputProps} />
      ) : (
        <div>
          {options.map((option) => (
            <React.Fragment key={option.value}>
              <input
                type="radio"
                id={option.value}
                value={option.value}
                {...register}
                {...inputProps}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </React.Fragment>
          ))}
        </div>
      )}
      {errors[inputProps.name] && (
        <span className="text-red-900 font-semibold">{errors[inputProps.name].message}</span>
      )}
    </div>
  );
};

export default RadioCheckbox;
