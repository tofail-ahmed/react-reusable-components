// Home.jsx
import React, { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/ui/Modal";
import { useForm } from "react-hook-form";

const Home = () => {
  const [modal, setModal] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

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
          <h3>This is modal</h3>
        </Modal>
      </div>
      <div>
        <form
          className="border border-yellow-600 p-4 bg-rose-200/40"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="lg:flex  gap-4 justify-center">
            <div className="border border-blue-600 p-4 lg:w-[30%] bg-slate-400/70">
              <div>
                <label
                  className=" block bg-red-500/70 text-green-600 font-bold p-2 rounded-s-md"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  {...register("name")}
                ></input>
                <select>
                  <option value="">One</option>
                  <option value="">Two</option>
                  <option value="">Three</option>
                  <option value="">Four</option>
                </select>
              </div>
              <div>
                <label
                  className=" block bg-red-500/70 text-green-600 font-bold p-2 rounded-s-md"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  {...register("name")}
                ></input>
                <select>
                  <option value="">One</option>
                  <option value="">Two</option>
                  <option value="">Three</option>
                  <option value="">Four</option>
                </select>
              </div>
              <div>
                <label
                  className=" block bg-red-500/70 text-green-600 font-bold p-2 rounded-s-md"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  {...register("name")}
                ></input>
                <select>
                  <option value="">One</option>
                  <option value="">Two</option>
                  <option value="">Three</option>
                  <option value="">Four</option>
                </select>
              </div>
            </div>
            <div className="border border-blue-600 p-4 lg:w-[30%] bg-slate-400/70">
              <div>
                <label
                  className=" block bg-red-500/70 text-green-600 font-bold p-2 rounded-s-md"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  {...register("name")}
                ></input>
                <select>
                  <option value="">One</option>
                  <option value="">Two</option>
                  <option value="">Three</option>
                  <option value="">Four</option>
                </select>
              </div>
              <div>
                <label
                  className=" block bg-red-500/70 text-green-600 font-bold p-2 rounded-s-md"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  {...register("name")}
                ></input>
                <select>
                  <option value="">One</option>
                  <option value="">Two</option>
                  <option value="">Three</option>
                  <option value="">Four</option>
                </select>
              </div>
              <div>
                <label
                  className=" block bg-red-500/70 text-green-600 font-bold p-2 rounded-s-md"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  {...register("name")}
                ></input>
                <select>
                  <option value="">One</option>
                  <option value="">Two</option>
                  <option value="">Three</option>
                  <option value="">Four</option>
                </select>
              </div>
            </div>
            <div className="border border-blue-600 p-4 lg:w-[30%] bg-slate-400/70">
              <div>
                <label
                  className=" block bg-red-500/70 text-green-600 font-bold p-2 rounded-s-md"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  {...register("name")}
                ></input>
                <select>
                  <option value="">One</option>
                  <option value="">Two</option>
                  <option value="">Three</option>
                  <option value="">Four</option>
                </select>
              </div>
              <div>
                <label
                  className=" block bg-red-500/70 text-green-600 font-bold p-2 rounded-s-md"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  {...register("name")}
                ></input>
                <select>
                  <option value="">One</option>
                  <option value="">Two</option>
                  <option value="">Three</option>
                  <option value="">Four</option>
                </select>
              </div>
              <div>
                <label
                  className=" block bg-red-500/70 text-green-600 font-bold p-2 rounded-s-md"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  {...register("name")}
                ></input>
                <select>
                  <option value="">One</option>
                  <option value="">Two</option>
                  <option value="">Three</option>
                  <option value="">Four</option>
                </select>
              </div>
            </div>
          </div>
          <Button type="submit" title="Submit" className="btn-success mx-auto">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Home;
