import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const token = localStorage.getItem('token');
  return (
    <header className='flex flex-row justify-between items-center m-10 mx-20 font-bold'>

      <div>
        <h3 className='text-2xl'>GIREI</h3>
      </div>

      <div className='flex flex-row gap-10'>
     
         <Link to="/">Home</Link>
        <Link to="/property">Properties</Link>
        <Link>About</Link>
      </div>

      {token ? <Link to='/dashboard' className='bg-red-600 rounded-xl p-2 px-4 text-white '> Dashboard 
 </Link> : <div className='flex flex-row gap-10 items-center'>
        <Link to="/login">Login</Link>
        <Link to='/signup' className='bg-red-600 rounded-3xl p-2 px-4 text-white'>Signup</Link>
      </div> }

      
    </header>
  );
};

export default Header;
