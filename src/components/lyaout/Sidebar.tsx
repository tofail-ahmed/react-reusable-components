import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-4">
      {" "}
      <button className="btn-primary">
        <Link to={"/"}>Home</Link>
      </button>
      <button className="btn-secondary">Secondary</button>
      <button className="btn-danger">Danger</button>
      <button className="btn-warning">Warning</button>
      <button className="btn-success">Success</button>
      <button className="btn-info">Info</button>
      <button className="btn-teal">Teal</button>
      <button className="btn-yellow">Yellow</button>
      <button className="btn-indigo">ndigo</button>
      <button className="btn-gray">Gray</button>
      <button className="btn-purple">Purple</button>
      <button className="btn-pink">Pink</button>
    </div>
  );
}

export default Sidebar