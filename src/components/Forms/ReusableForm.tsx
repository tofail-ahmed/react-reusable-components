import React from "react";
import { Form, FormSection, FormSubmit, Input } from "../ReusableForm";
import { FieldValues, useForm } from "react-hook-form";

const ReusableForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div className="py-6">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-center">Reusable Form</h3>
        <FormSection>
        
          
          
          
          <Input
           type='text'
           label="Name"
           placeholder="Name"
           register={register('name')}
           errors={errors}
           ></Input>
          <Input
           type='email'
           label="Email"
           placeholder="Email"
           register={register('email')}
           errors={errors}
           ></Input>
          
          <Input
           type='password'
           label="Password"
           placeholder="Password"
           register={register('password')}
           errors={errors}
           ></Input>
           <Input
           type='text'
           label="Address"
           placeholder="Address"
           register={register('address')}
           errors={errors}
           ></Input>
        </FormSection>
        <FormSubmit></FormSubmit>
      </Form>
    </div>
  );
};

export default ReusableForm;
