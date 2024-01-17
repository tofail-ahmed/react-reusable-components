import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex gap-4 flex-wrap justify-center'>
      <button className="btn-primary"><Link to={"/admin"}>Admin</Link></button>
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
      <button className="btn-solid">Solid</button>
      <button className="btn-outline">Outline</button>
      <button className="btn-ghost">Ghost</button>
    </div>
  );
}

export default Navbar