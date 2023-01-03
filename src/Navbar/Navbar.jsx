import React from 'react';
import logo from '../assets/logo/White Black Bold Minimalist Beauty Blogger Logo.png'
import {FiPhone} from 'react-icons/fi'
const Navbar = () => {
    return (

            <div className="flex justify-between items-center px-3 py-1 h-20">
               <img src={logo} alt="" className='w-44' />
               <p className='text-lg text-gray-600 flex justify-end items-center gap-1'>Need help? <FiPhone></FiPhone> +91 8237389</p>
            </div>
       
    );
};

export default Navbar;