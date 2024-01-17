import React from "react";
import { Form, FormSection, FormSubmit } from "../ReusableForm";
import { FieldValues, useForm } from "react-hook-form";

const ReusableForm = () => {

      const {handleSubmit,register,formState: { errors },}=useForm();
      const onSubmit=(data:FieldValues)=>{
            console.log(data)
      }
  return (
    <div className="py-6">
      <Form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="text-center">Reusable Form</h3>
        <FormSection>

        <div className="w-full max-w-md">
                <label
                  className=" block  text-red-600 font-bold  rounded-s-md"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="formInput"
                  type="text"
                  id="name"
                  placeholder="Name"
                  {...register("name")}
                ></input>
                {errors.name && (
                  <span className="text-red-900 font-semibold">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="w-full max-w-md">
                <label
                  className=" block  text-red-600 font-bold  rounded-s-md"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="formInput"
                  type="email"
                  id="email"
                  placeholder="Email"
                  {...register("email")}
                ></input>
                {errors.email && (
                  <span className="text-red-900 font-semibold">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="w-full max-w-md">
                <label
                  className=" block  text-red-600 font-bold  rounded-s-md"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="formInput"
                  type="password"
                  id="password"
                  placeholder="Password"
                  {...register("password")}
                ></input>
                {errors.password && (
                  <span className="text-red-900 font-semibold">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="w-full max-w-md">
                <label
                  className=" block  text-red-600 font-bold  rounded-s-md"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Address"
                  {...register("address", { required: true })}
                ></input>
                {errors.address && (
                  <span className="text-red-900 font-semibold">
                    {errors.address.message}
                  </span>
                )}
              </div>
        </FormSection>
        <FormSubmit></FormSubmit>
      </Form>
    </div>
  );
};

export default ReusableForm;
