import React from 'react';

const Header = () => {
  return (
    <header className='flex flex-row justify-between items-center m-10 mx-20 font-bold'>

      <div>
        <h3 className='text-2xl'>GIREI</h3>
      </div>

      <div className='flex flex-row gap-10'>
     
         <p>Home</p>
        <p>Properties</p>
        <p>About</p>
      </div>

      <div className='flex flex-row gap-10'>
        <button className='bg-'>Login</button>
        <button className='bg-red-600 rounded-3xl p-2 px-4 text-white'>Signup</button>
      </div>
    </header>
  );
};

export default Header;
