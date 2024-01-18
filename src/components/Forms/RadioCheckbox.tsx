import React from "react";

const RadioCheckbox = ({ label, type, register, errors, options, errorMessage, ...inputProps }) => {
  return (
    <div className="w-full max-w-md">
      <label className="block text-red-600 font-bold rounded-s-md" htmlFor={inputProps.id || inputProps.name}>
        {label}
      </label>
      {type === "textarea" ? (
        <div>
          <textarea rows={1} {...register} {...inputProps}></textarea>
          {errors[inputProps.name] && (
            <span className="text-red-900 font-semibold">{errorMessage}</span>
          )}
        </div>
      ) : type === "select" ? (
        <div>
          <select {...register}>
            <option value="">{`Select ${label}`}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.gender && (
        <span className="text-red-600 text-sm">{errors.gender.message}</span>
      )}
        </div>
      ) : type === "checkbox" ? (
        <div>
          <input type="checkbox" {...register} {...inputProps} />
          {errors[inputProps.name] && (
            <span className="text-red-900 font-semibold">{errorMessage}</span>
          )}
        </div>
      ) : (
        <div>
          {options.map((option) => (
            <React.Fragment key={option.value}>
              <input
                type="radio"
                value={option.value}
                {...register}
                {...inputProps}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </React.Fragment>
          ))}
          {errors[inputProps.name] && (
            <span className="text-red-900 font-semibold">{errorMessage}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default RadioCheckbox;
