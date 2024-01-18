import React from "react";
import { Form, FormSection, FormSubmit, Input } from "../ReusableForm";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import RadioCheckbox from "./RadioCheckbox";
import Checkbox from "./Checkbox";
import RadioButton from "./RadioButton";
import SelectOption from "./SelectOption";
import Textarea from "./Textarea";

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
            register={register("name", { required: "type your name" })}
            errors={errors}
          ></Input>
          <Input
            type="email"
            label="Email"
            placeholder="Email"
            register={register("email", { required: "type your email" })}
            errors={errors}
          ></Input>
          <Input
            type="password"
            label="Password"
            placeholder="Password"
            register={register("password", { required: "type your password" })}
            errors={errors}
          ></Input>
          {/* //textArea------------------------ */}
          <Textarea
            head={"Address"}
            errors={errors}
            register={register("address", { required: "Type a valid Address" })}
          />
          {/* //SelectOption--------------- */}
          <SelectOption
            label="Age"
            head={"Age"}
            register={register("age", { required: "You must select the age" })}
            errors={errors}
            options={[18, 19, 20, 21, 22].map((value) => ({
              value,
              label: value,
            }))}
          />
          {/* //checkBox-------------------- */}
          <Checkbox
            register={register("terms", {
              required: "You must accept the terms",
            })}
            errors={errors}
            label={"Accept Terms and conditions"}
            id={"terms"}
          ></Checkbox>
          {/* //*radio button----------- */}
          <RadioButton
            head={"Gender"}
            id={"gender"}
            options={genderOptions}
            errors={errors}
            register={register("gender", {
              required: "You must select the gender",
            })}
          ></RadioButton>
        </FormSection>
        <FormSubmit></FormSubmit>
      </Form>
    </div>
  );
};

export default ReusableForm;
