// Home.jsx
import React, { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/ui/Modal";
import { useForm } from "react-hook-form";
import cn from "../utils/cn";
import NormalForm from "../components/Forms/NormalForm";

const Home = () => {
  const [modal, setModal] = useState(false);
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
          className={cn(" p-1 max-w-md mx-auto shadow-2xl rounded-md shadow-slate-700",
          {
            "max-w-4xl ":double
          })}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="">
            <div className={cn(" p-4 rounded-md  bg-green-600/40 grid grid-cols-1 justify-items-center  gap-4",
            {
              "md:grid-cols-2 ":double
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
          {/* <Button onClick={handleDouble} title={`${double?"Single":"Double"}`} className="btn-success mx-auto">
            Submit
          </Button> */}
        </form>
      </div>
    </div>
  );
};

export default Home;
