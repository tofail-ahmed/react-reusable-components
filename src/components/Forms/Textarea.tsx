import React from 'react';

const Textarea = ({register,errors,head}) => {
      return (
            <div className='w-full max-w-md'>
                  <span className='text-red-600 font-bold text-md'>{head}</span>
          <textarea type="textarea" rows={1} {...register} ></textarea>
          {errors.address && (
          <span className="text-red-600 text-sm">{errors.address.message}</span>
        )}
        </div>
      );
};

export default Textarea;