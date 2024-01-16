import React, { useState } from "react";
import { useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../Button";

const NormalForm = () => {
      const { register, handleSubmit } = useForm();
      const onSubmit = (data) => {
        console.log(data);
      };
      const [double,setDouble]=useState(true);
      const handleDouble=()=>{
        setDouble((prev=>!prev))
      }
  return (
    <div>
          <div>
        <form
          className={cn("border border-green-950 p-4 max-w-lg mx-auto bg-green-600/40",
          {
            "max-w-4xl bg-red-600":double
          })}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="">
            <div className={cn("border border-blue-600 p-4  bg-slate-400/70 grid grid-cols-1 justify-items-center  gap-4",
            {
              "md:grid-cols-2 bg-green-600/90":double
            })}>
              <div className="w-[70%] max-w-md">
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
              </div >
              <div className="w-[70%] max-w-md">
                <label
                  className=" block  text-red-600 font-bold  rounded-s-md"
                  htmlFor="name"
                >
                  Email
                </label>
                <input
                  className="formInput"
                  type="text"
                  id="name"
                  placeholder="Email"
                  {...register("name")}
                ></input>
              </div>
              <div className="w-[70%] max-w-md">
                <label
                  className=" block  text-red-600 font-bold  rounded-s-md"
                  htmlFor="name"
                >
                  Password
                </label>
                <input
                  className="formInput"
                  type="text"
                  id="name"
                  placeholder="Password"
                  {...register("name")}
                ></input>
              </div>
              <div className="w-[70%] max-w-md">
                <label
                  className=" block  text-red-600 font-bold  rounded-s-md"
                  htmlFor="name"
                >
                  Address
                </label>
                <input
            
                  type="text"
                  id="name"
                  placeholder="Address"
                  {...register("name")}
                ></input>
              </div>
              <div className="w-[70%] max-w-md" >
                <label
                  className=" block  text-red-600 font-bold  rounded-s-md"
                  htmlFor="name"
                >
                  Address
                </label>
              <textarea ></textarea>
              </div>
              <div className="w-[70%] max-w-md" >
                <label
                  className=" block  text-red-600 font-bold  rounded-s-md"
                  htmlFor="name"
                >
                  Address
                </label>
               <select  >
                <option value="">18</option>
                <option value="">19</option>
                <option value="">20</option>
                <option value="">21</option>
                <option value="">22</option>
               </select>
              </div>
              <div className="w-[70%] max-w-md" >
                <label
                  className=" block  text-red-600 font-bold  rounded-s-md"
                  htmlFor="name"
                >
                  Address
                </label>
             <input  type="checkbox" name="" id="" />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
          <Button type="submit" title="Submit" className="btn-success ">
            Submit
          </Button>
         </div>
        <div>
        <Button onClick={handleDouble} title={`${double?"Single":"Double"}`} className="btn-success mx-auto">
            Submit
          </Button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default NormalForm;
