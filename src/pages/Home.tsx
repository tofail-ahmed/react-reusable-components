// Home.jsx
import React, { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/ui/Modal";
import { FieldValues, useForm } from "react-hook-form";
import cn from "../utils/cn";
import NormalForm from "../components/Forms/NormalForm";

import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, TForm } from "../components/Forms/validation";
import ReusableForm from "../components/Forms/ReusableForm";

const Home = () => {
  const [modal, setModal] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TForm>({ resolver: zodResolver(SignUpSchema) });
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  console.log(errors)
  const double = true;
  // const [double, setDouble] = useState(true);
  // const handleDouble = () => {
  //   setDouble((prev) => !prev);
  // };
console.log(watch("name"))
  return (
    <div>
      <div className="flex items-center justify-around">
        <h1>Home</h1>

        <Button
          onClick={() => setModal((prev) => !prev)}
          variant="solid"
          title="Open Modal"
          className={`${modal ? "invisible" : "visible"}`}
        >
          Click Meh
        </Button>
        <Modal modal={modal} setModal={setModal}>
          <h4>Registration Form </h4>
          <NormalForm></NormalForm>
        </Modal>
      </div>
      <div>
        
        <form
          className={cn(
            " p-1 max-w-md mx-auto shadow-2xl rounded-md shadow-slate-700",
            {
              "max-w-4xl ": double,
            }
          )}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="">
          <h3 className="text-center ">Normal Form</h3>
            <div
              className={cn(
                " p-4  rounded-md  bg-green-600/40 grid grid-cols-1 justify-items-center  gap-4",
                {
                  "md:grid-cols-2 ": double,
                }
              )}
            >
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
            </div>
          </div>
          <div className="flex justify-end mt-2">
            <Button type="submit" title="Submit" className="btn-success ">
              Submit
            </Button>
          </div>
          
        </form>
      </div>
      <ReusableForm></ReusableForm>
    </div>
  );
};

export default Home;
