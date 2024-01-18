import React, { ReactNode, useContext } from 'react'
import cn from '../../utils/cn';
import { FormElementContext } from '.';
export const FormSection = ({children}) => {
      const {double}=useContext(FormElementContext)
  return <div className={cn(
      " p-4  rounded-md  bg-green-600/40 grid grid-cols-1 justify-items-center  gap-4",
      {
        "md:grid-cols-2 ": double,
      }
    )}>{children}</div>;
};
