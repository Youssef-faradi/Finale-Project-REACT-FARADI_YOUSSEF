import React, { useContext, useState } from 'react';
import "./product.scss";
import { MyContext } from '../../../utils/contextProvider';
import video from "../../../assets/videos/Tom Ford - Fougere D'Argent (Spec Ad) (1).mp4";
import { IoIosAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";

import { MdDeleteOutline } from "react-icons/md";

export const FirstsectionProduct = () => {
    const { DB, setDB, basket, setbasket } = useContext(MyContext);
    let newtab = [...basket]

    // const add = (element) => {
    //     let newtab = [...basket]
    //     let connectedUser = newtab.findIndex((element => element.userName == userName && element.password == password))
    //         if (connectedUser != -1 && auth == myCode) {
    //             navigate(`/profile/${newTab[connectedUser].userName}`)
    //             console.log(newTab[connectedUser]);
    //             setUserName("")
    //             setPassword("")
    //     newtab.
    //     setbasket(newtab)
    // }

    const remove = (product) => {
        let newtab = [...basket]
        let selectedProduct = newtab.findIndex((element => element.title == product.title))
        newtab.splice(selectedProduct,1)
        setbasket(newtab)
    }

    return (
        <>
            <div className="w-full h-[50vh] relative">
                <video className="h-full w-full object-cover" muted loop autoPlay>
                    <source src={video} type="video/mp4" />
                </video>
                <div className='absolute top-[35%] left-[25%] lg:left-[38%] text-white'>
                    <h1 className='text-5xl lg:text-7xl w-auto'>Your Shopping Cart</h1>
                </div>
            </div>
            <div className='w-full px-[10%] py-4'>
                {basket.map((element, index) => (
                    <>
                        <div className="border py-[2rem] px-[10%] flex rounded items-center justify-between">
                            <div className="h-[20vh] w-[10%] rounded" style={{ backgroundImage: `url(${element.product})`, backgroundPosition: `center`, backgroundSize: `cover` }}></div >
                            <div>
                                <h1 className="text-[1.1rem] font-light text-gray-500" >{element.title}</h1>
                            </div>
                            <div>
                                <h1 className="text-[1.1rem] font-light text-gray-500" >${element.price}</h1>
                            </div>
                            <div className='flex items-center gap-1'>
                                <FaMinus className='bg-[--third] rounded text-2xl text-white' />
                                <h1 className="text-[1.1rem] font-light px-3 py-1 mb-0 rounded bg-[--third] text-white">{element.quantity}</h1>
                                <IoIosAdd className='bg-[--third] rounded text-2xl text-white'/>

                            </div>
                            <button onClick={() => remove(element)} >
                                <MdDeleteOutline  className='text-2xl' />
                            </button>
                        </div>
                    </>

                ))}
            </div>
        </>
    );
};