import React from 'react';
import "./header.scss"


import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <>
            <div className='h-fit lg:h-[60vh]  w-full bg-[--secondary] flex text-center lg:text-start flex-col py-4 lg:py-0 lg:flex-row  items-center '>
                <div className='w-full lg:w-[40%] min-[430px]:text-start   px-[5%] h-[70%]'>
                    <h3>GET IN TOUCH</h3>
                    <p className='text-sm'>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                    <ul className="wrapper pt-2">
                        <li className="icon facebook">
                            <span className="tooltip">Facebook</span>
                            <span><FaFacebookF /></span>
                        </li>
                        <li className="icon twitter">
                            <span className="tooltip">X</span>
                            <span><FaXTwitter /></span>
                        </li>
                        <li className="icon instagram">
                            <span className="tooltip">Instagram</span>
                            <span><FaInstagram /></span>
                        </li>
                        <li className="icon Pinterest">
                            <span className="tooltip">Pinterest</span>
                            <span><FaPinterestP /></span>
                        </li>
                    </ul>
                </div>
                <div className='w-full lg:w-[40%] flex flex-col lg:flex-row min-[430px]:text-start  justify-between  max-[430px]:pt-5  text-sm h-[70%]'>
                    <div className='w-full lg:w-[30%]'>
                        <h3 className='text-2xl pb-4'>CATEGORIES</h3>
                        <p className='text-[--third]'>Men</p>
                        <p className='text-[--third]'>Women</p>
                        <p className='text-[--third]'>Fragrances</p>
                        <p className='text-[--third]'>Brands</p>
                    </div>
                    <div className='w-full lg:w-[30%]'>
                        <h3 className='text-2xl pb-4'>LINKS</h3>
                        <p className='text-[--third]'>Search</p>
                        <p className='text-[--third]'>About Us</p>
                        <p className='text-[--third]'>Contact Us</p>
                        <p className='text-[--third]'>Returns</p>
                    </div>
                    <div className='w-full lg:w-[30%]'>
                        <h3 className='text-2xl pb-4'>HELP</h3>
                        <p className='text-[--third]'>Track Order</p>
                        <p className='text-[--third]'>Returns</p>
                        <p className='text-[--third]'>Shipping</p>
                        <p className='text-[--third]'>FAQs</p>
                    </div>
                </div>
                <div className=' h-[70%] '>
                    <h3 className='text-2xl pb-4'>NEWSLETTER</h3>
                    <div className="flex justify-center lg:justify-start ">
                        <div className="relative">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                className="max-[430px]:w-[60vw]  border-b border-[--third] py-1 focus:border-b-2 focus:border-[--third] transition-colors focus:outline-none peer bg-inherit"
                            />
                            <label
                                htmlFor="username"
                                className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-[--third] "
                            >Email</label>
                        </div>
                    </div>
                    <button className="w-[70vw] lg:w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#4a3ac7] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                        Subscribe
                    </button>
                </div>
            </div>
            
        </>
    );
};

export default Footer;