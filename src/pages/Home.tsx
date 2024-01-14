import React from "react";
import Button from "../components/Button";

const Home = () => {
  const handleClick=()=>{
    console.log("Clicked")
  }
  return (
    <div className="flex items-center justify-around">
      <h1>Home</h1>
      <Button onClick={handleClick} variant={"solid"} title="click meh">Click Meh</Button>
    </div>
  );
};

export default Home;
