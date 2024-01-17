import React from 'react'
import Button from "../Button";

export const FormSubmit = () => {
  return (
    <div className="flex justify-end mt-2">
      <Button type="submit" title="Submit" className="btn-success ">
        Submit
      </Button>
    </div>
  );
};

