import { useState } from "react";



export const FirstSectionHome = () => {
    const [imgs,setimgs ] = useState({
        img1: require("../../../assets/images/man.jpg"),
        img2: require("../../../assets/images/woman.jpg"),
        
        
    });

    return (
        <>
            <div className="h-[130vh] w-full px-[10%] flex gap-4 flex-wrap">
                <div className="rounded w-[px] h-[500px] overflow-hidden ">
                    <img className="w-full h-full object-cover rounded hover:scale-125 transition delay-400" src={imgs.img1} alt="img" />
                </div>
                <div className="rounded w-[px] h-[500px] overflow-hidden ">
                    <img className="w-full h-full object-cover rounded  hover:scale-125 transition delay-400" src={imgs.img2} alt="img" />
                </div>
            </div>
        </>
    );
};
