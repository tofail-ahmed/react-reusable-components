import React from "react";
import { useForm } from "react-hook-form";
import cn from "../../utils/cn";

const NormalForm = () => {
      const { register, handleSubmit } = useForm();
      const onSubmit = (data) => {
        console.log(data);
      };
      const double=true;
  return (
    <div>
      <div>
        <form
          className={cn(
            "border border-green-950 p-4 max-w-lg mx-auto bg-green-600/40",
            {
              "max-w-4xl": double,
            }
          )}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="">
            <div
              className={cn(
                "border border-blue-600 p-4  bg-slate-400/70 grid grid-cols-1 justify-items-center  gap-4",
                {
                  "md:grid-cols-2": double,
                }
              )}
            >
              <div>
                <label
                  className=" block  text-green-600 font-bold p-2 rounded-s-md"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full"
                  type="text"
                  id="name"
                  placeholder="Name"
                  {...register("name")}
                ></input>
              </div>
              <div>
                <label
                  className=" block  text-green-600 font-bold p-2 rounded-s-md"
                  htmlFor="name"
                >
                  Email
                </label>
                <input
                  className="w-full"
                  type="text"
                  id="name"
                  placeholder="Email"
                  {...register("name")}
                ></input>
              </div>
              <div>
                <label
                  className=" block  text-green-600 font-bold p-2 rounded-s-md"
                  htmlFor="name"
                >
                  Password
                </label>
                <input
                  className="w-full"
                  type="text"
                  id="name"
                  placeholder="Password"
                  {...register("name")}
                ></input>
              </div>
              <div>
                <label
                  className=" block  text-green-600 font-bold p-2 rounded-s-md"
                  htmlFor="name"
                >
                  Address
                </label>
                <input
                  className="w-full"
                  type="text"
                  id="name"
                  placeholder="Address"
                  {...register("name")}
                ></input>
              </div>
            </div>
          </div>
          {/* <Button type="submit" title="Submit" className="btn-success mx-auto">
        Submit
      </Button> */}
        </form>
      </div>
    </div>
  );
};

export default NormalForm;
