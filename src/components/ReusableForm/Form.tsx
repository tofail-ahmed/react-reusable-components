import React, { createContext } from 'react';
import cn from '../../utils/cn';
export const FormElementContext=createContext<{double:boolean}|null>(null);
export const Form = ({ children, onSubmit,double }) => {
  return (
      <FormElementContext.Provider value={{double}}>

    <form
      className={cn(
        " p-1 max-w-md mx-auto shadow-2xl rounded-md shadow-slate-700",
        {
          "max-w-4xl ": double,
          
        }
      )}
      onSubmit={onSubmit}
    >
      {children}
    </form>
      </FormElementContext.Provider>
  );
};
