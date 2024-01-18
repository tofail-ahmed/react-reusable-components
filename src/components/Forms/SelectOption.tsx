import React from 'react';

const SelectOption = ({register,options,label,errors,head}) => {
      console.log(errors)
      return (
            <div className='w-full max-w-md'>
              <span className='text-md text-red-600 font-bold'>{head}</span>
            <select {...register}>
              <option value="">{`Select ${label}`}</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.age && (
          <span className="text-red-600 text-sm">{errors.age.message}</span>
        )}
          </div>
      );
};

export default SelectOption;