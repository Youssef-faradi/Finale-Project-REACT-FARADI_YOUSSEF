import { useContext, useState } from "react";
import { MyContext } from "../../../utils/contextProvider";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow, GiStarsStack } from "react-icons/gi";
import { LuBadgeCheck } from "react-icons/lu";
import Carousel from 'react-bootstrap/Carousel';



export const FirstSectionHome = () => {
    const [imgs] = useState({
        img1: require("../../../assets/images/men.jpg"),
        img2: require("../../../assets/images/woman.jpg"),
        img3: require("../../../assets/images/niche.jpg"),
        img4: require("../../../assets/images/unisex.jpg"),
        img5: require("../../../assets/images/disigner.jpg"),
        img6: require("../../../assets/images/seller.jpg"),
    });

    const { DB, setDB } = useContext(MyContext);
    const [type, setType] = useState("new");
    const [filter, setfilter] = useState(DB.slice(9, 14));

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const images = ["bg-1", "bg-5", "bg-6", "bg-7"];
    const imgPath = images.map(element => require(`../../../assets/images/${element}.jpg`));
    const shuffledImages = shuffle(DB);
    console.log(shuffledImages);


    const checkProduct = (productType) => {
        const choice = DB.filter((element) => element.type === productType);
        const filter = choice.slice(0, 5)
        setfilter(filter);

    };

    return (
        <>
            <Carousel className="pb-5">
                <Carousel.Item>
                    <img src={imgPath[0]} className="w-full h-[60vh]" alt="" />
                    <Carousel.Caption>
                        <h1>Frech</h1>
                        <p>Captivating French perfumes: where elegance meets scent.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={imgPath[1]} className="w-full h-[60vh]" alt="" />
                    <Carousel.Caption>
                    <h1>Frech</h1>
                        <p>Captivating French perfumes: where elegance meets scent.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={imgPath[2]} className="w-full h-[60vh]" alt="" />
                    <Carousel.Caption>
                        <h1>Frech</h1>
                        <p>Captivating French perfumes: where elegance meets scent.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={imgPath[3]} className="w-full h-[60vh]" alt="" />
                    <Carousel.Caption>
                        <h1>Frech</h1>
                        <p>Captivating French perfumes: where elegance meets scent.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="h-fit lg:h-[130vh] w-full px-[10%] flex justify-center  gap-4 flex-wrap ">
                <div className="w-full lg:w-[30%] flex flex-col gap-4 ">
                    <div className="rounded w-full h-[60%] lg:h-[50%] overflow-hidden relative  ">
                        <div className="w-full h-full">
                            <img className="w-full h-full object-cover rounded hover:scale-110 transition " src={imgs.img1} alt="img" />
                        </div>
                        <button className="bg-[--secondary] hover:bg-[--primary] hover:text-white w-[40%] py-2 rounded absolute bottom-[10%] right-[30%]">Man</button>
                    </div>
                    <div className="rounded w-full h-[40%] lg:h-[35%] overflow-hidden relative ">
                        <div className="w-full h-full">
                            <img className="w-full h-full object-cover rounded hover:scale-110 transition" src={imgs.img5} alt="img" />
                        </div>
                        <button className="bg-[--secondary] hover:bg-[--primary] hover:text-white w-[40%] py-2 rounded absolute bottom-[10%] right-[30%]">designer</button>
                    </div>
                </div>
                <div className="w-full lg:w-[30%] flex flex-col gap-4 ">
                    <div className="rounded w-full h-[40%] lg:h-[35%] overflow-hidden relative ">
                        <div className="w-full h-full">
                            <img className="w-full h-full object-cover rounded hover:scale-110 transition" src={imgs.img3} alt="img" />
                        </div>
                        <button className="bg-[--secondary] hover:bg-[--primary] hover:text-white w-[40%] py-2 rounded absolute bottom-[10%] right-[30%]">Niche</button>
                    </div>
                    <div className="rounded w-full h-[60%] lg:h-[50%] overflow-hidden relative ">
                        <div className="w-full h-full">
                            <img className="w-full h-full object-cover rounded hover:scale-110 transition" src={imgs.img2} alt="img" />
                        </div>
                        <button className="bg-[--secondary] hover:bg-[--primary] hover:text-white w-[40%] py-2 rounded absolute bottom-[10%] right-[30%]">Women</button>
                    </div>
                </div>
                <div className="w-full lg:w-[30%] flex flex-col gap-4 ">
                    <div className="rounded w-full h-[43%] overflow-hidden relative ">
                        <div className="w-full h-full">
                            <img className="w-full h-full object-cover rounded hover:scale-110 transition" src={imgs.img6} alt="img" />
                        </div>
                        <button className="bg-[--secondary] hover:bg-[--primary] hover:text-white w-[40%] py-2 rounded absolute bottom-[10%] right-[30%]">Arabe</button>
                    </div>
                    <div className="rounded w-full h-[42%] overflow-hidden relative ">
                        <div className="w-full h-full">
                            <img className="w-full h-full object-cover rounded hover:scale-110 transition" src={imgs.img4} alt="img" />
                        </div>
                        <button className="bg-[--secondary] hover:bg-[--primary] hover:text-white w-[40%] py-2 rounded absolute bottom-[10%] right-[30%]">Unisex</button>
                    </div>
                </div>
            </div>
            <div className="w-full px-[10%] flex items-center flex-col gap-4  pb-5">
                <h1>FEATURED PRODUCTS</h1>
                <div className="flex justify-center gap-4">
                    <button onClick={() => checkProduct("new")} className="smky-btn3 relative hover:text-[--white] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[--primary] rounded after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600">New</button>
                    <button onClick={() => checkProduct("old")} className="smky-btn3 relative hover:text-[--white] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[--primary] rounded after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600">Old</button>
                    <button onClick={() => checkProduct("sale")} className="smky-btn3 relative hover:text-[--white] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[--primary] rounded after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600">Sale</button>
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-center gap-3">
                    {filter.map((element, index) => (
                        <div key={index} className="rounded w-full lg:w-[30%] h-[70vh] lg:h-[50vh] overflow-hidden relative">
                            <div className="w-full h-full">
                                <img className="w-full h-full object-cover rounded hover:scale-110 transition" src={element.product} alt="img" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="h-fit lg:h-[70vh] flex flex-wrap justify-between bg-[--third] items-center gap-3 py-4 w-full px-[10%]">
                <div className="rounded w-full lg:w-[58%] h-[50%] lg:h-[88%] overflow-hidden relative ">
                    <div className="w-full h-full">
                        <img className="w-full h-full object-cover rounded hover:scale-110 transition" src={imgs.img4} alt="img" />
                    </div>
                    <div className="w-[100%] absolute bottom-[30%] right-[-3%] text-center text-[--secondary]">
                        <h2>Scent Elegance</h2>
                        <h1>UNVEIL OUR SCENT</h1>
                        <button className="hover:underline ">DISCOVER OUR COLLECTION</button>
                    </div>
                </div>
                <div className="rounded  w-full lg:w-[40%] h-[70vh] lg:h-[88%] border-1 border-black">
                    <div className="w-full h-[70%]">
                        <img className="w-full h-full rounded object-cover" src={shuffledImages[0].product} alt="" />
                    </div>
                    <div className="w-full pt-2">
                        <h5 className="text-center">{shuffledImages[0].title}</h5>
                        <h5 className="text-center ">{shuffledImages[0].price}$</h5>
                        <div className="w-full flex gap-4 justify-center">
                            <div className="felx flex-col text-center bg-[--secondary] px-2  lg:px-4 rounded"><h5 className="mb-0">75</h5> <h5 className="text-sm">day</h5></div>
                            <div className="felx flex-col text-center bg-[--secondary] px-2  lg:px-3 rounded"><h5 className="mb-0">7</h5> <h5 className="text-sm">hour</h5></div>
                            <div className="felx flex-col text-center bg-[--secondary] px-2  lg:px-3 rounded"><h5 className="mb-0">43</h5> <h5 className="text-sm">min</h5></div>
                            <div className="felx flex-col text-center bg-[--secondary] px-2  lg:px-2 rounded"><h5 className="mb-0">32</h5> <h5 className="text-sm">sec</h5></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="w-full h-[250vh] lg:h-[80vh] px-[10%]  flex  items-center flex-col gap-4 py-4">
                <h1>OUR BLOG</h1>
                <div className="flex flex-col lg:flex-row w-full h-[100%] gap-4">
                    <div className="w-full lg:w-[33%] h-[33%] lg:h-full bg-red-400">

                    </div>
                    <div className=" w-full lg:w-[33%] h-[33%] lg:h-full bg-red-400">

                    </div>
                    <div className=" w-full lg:w-[33%] h-[33%] lg:h-full bg-red-400">

                    </div>
                </div>
            </div> */}
            <div className="w-full h-fit lg:h-[33vh] px-[7%] flex flex-col ">
                <h1 className="text-center py-4">About Us</h1>
                <div className="w-full flex flex-col pb-4  lg:flex-row gap-4 text-sm">
                    <div className="w-full flex items-center gap-3 lg:w-[25%] h-fit">
                        <TbTruckDelivery className="text-8xl " />
                        <div>
                            <h4 className="text-lg " >Same Day Free Shipping</h4>
                            <p>Orders ship on the day that you place them and arrive within days.</p>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-3 lg:w-[25%] h-fit">
                        <LuBadgeCheck className="text-8xl " />
                        <div>
                            <h4 className="text-lg ">Trusted since 2001</h4>
                            <p>100% authentic fragrances. You won't find knockoffs or imitations here.</p>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-3 lg:w-[25%] h-fit">
                        <GiReturnArrow className="text-6xl " />
                        <div>
                            <h4 className="text-lg ">30 Days Return</h4>
                            <p>Simply return it within 30 days for an exchange.</p>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-3 lg:w-[25%] h-fit">
                        <GiStarsStack className="text-7xl " />
                        <div>
                            <h4 className="text-lg ">5 Star Customer Ratings</h4>
                            <p>Over 20 million satisfied customers around th world.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
