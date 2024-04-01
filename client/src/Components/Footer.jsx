import React from 'react';
import { footerMenu } from '../Home/data';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=' inset-x-0 bottom-0 flex gap-40 items-center mx-20'>
      <div>
        <h3 className='text-2xl font-bold'>GIREI</h3>
      </div>

      <div className='flex gap-20'>

        {footerMenu.map( (menu,index) => (
          <div key={index} className='flex flex-col gap-5'>
            <h4 className='font-bold'>{menu.title}</h4>
            {
              menu.list.map( (menuItem, index) => (
                <Link key={index} to={menuItem.link}>{menuItem.title}</Link>
              ))
            }

          </div>
        ))}

      </div>
    </footer>
  );
};

export default Footer;
