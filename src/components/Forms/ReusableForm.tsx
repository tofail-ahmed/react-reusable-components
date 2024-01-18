import React from "react";
import { Form, FormSection, FormSubmit, Input } from "../ReusableForm";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import RadioCheckbox from "./RadioCheckbox";

const ReusableForm = () => {
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: FieldValues | boolean) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="py-6">
      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
        <h3 className="text-center">Reusable Form</h3>
        <FormSection>
          <Input
            type="text"
            label="Name"
            placeholder="Name"
            register={register("name")}
            errors={errors}
          ></Input>
          <Input
            type="email"
            label="Email"
            placeholder="Email"
            register={register("email")}
            errors={errors}
          ></Input>
          <Input
            type="password"
            label="Password"
            placeholder="Password"
            register={register("password")}
            errors={errors}
          ></Input>
          <Input
            label="Address"
            register={register("address")}
            errors={errors}
            type="text"
            placeholder="Address"
            id={"address"}
            name="address"
          ></Input>
          <RadioCheckbox
            label="Address"
            type="textarea"
            register={register("address")}
            errors={errors}
          />
          <RadioCheckbox
            label="Age"
            type="select"
            register={register("age")}
            errors={errors}
            options={[18, 19, 20, 21, 22].map((value) => ({
              value,
              label: value,
            }))}
          />
          <RadioCheckbox
            label="Gender"
            type="radio"
            register={register("gender")}
            errors={errors}
            options={genderOptions}
          />
          <RadioCheckbox
            label="Accept Terms"
            type="checkbox"
            register={register("terms")}
            errors={errors}
          />
        </FormSection>
        <FormSubmit></FormSubmit>
      </Form>
    </div>
  );
};

export default ReusableForm;
