import React from "react";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import "./header.scss"
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState("hidden");
    const navigate = useNavigate()
    const MenuToggle = () => {
        setIsMenuOpen(prevClassName => prevClassName === 'hidden' ? '' : 'hidden');
    };
    return (
        <>
            <div className="h-[10vh] w-full fixed flex items-center max-[430px]:justify-between px-[8vw] bg-white z-10 ">
                <div className="flex  w-[40%]">
                    <button><h1>YF</h1></button>
                    <p>store</p>
                </div>
                <div className={`hello max-[430px]:${isMenuOpen} bg-white  lg:static fixed  ${isMenuOpen == "hidden" ? "top-[-100%]" : "top-[13vh] "}  h-fit  lg:h-[100%] flex-col lg:flex-row items-center flex lg:w-[60%] gap-4`}>
                        <h5 className="py-2" onClick={()=>navigate(`/`)}> <button>Home</button></h5>
                        <h5 className="py-2" onClick={()=>navigate(`/shop`)}> <button>Shop</button></h5>
                        <h5 className="py-2" onClick={()=>navigate(`/about`)}> <button>About</button></h5>
                        <h5 className="py-2" onClick={()=>navigate(`/contact`)}> <button>Contact</button></h5>
                </div>
                <div className="flex gap-3 items-center ">
                    <button><FaRegUser className="text-2xl" /></button>
                    <div className="flex w-fit h-[100%] relative">
                        <button><LuShoppingBag className="text-2xl " /></button>
                        <p className="absolute left-[90%] top-[-40%] px-1 rounded-circle bg-slate-400 text-xs">1</p>
                    </div>
                    <label onChange={MenuToggle} className="lg:hidden block hamburger">
                        <input type="checkbox"/>
                            <svg viewBox="0 0 32 32">
                                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                <path className="line" d="M7 16 27 16"></path>
                            </svg>
                    </label>
                </div>
            </div>

        </>
    );
};

export default Header;



