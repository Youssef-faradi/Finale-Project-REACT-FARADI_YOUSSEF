import React, { useContext, useState, useEffect } from 'react';
import "./shop.scss";
import video from "../../../assets/videos/Tom Ford - Fougere D'Argent (Spec Ad) (1).mp4";
import { FaSearch } from "react-icons/fa";
import { MyContext } from '../../../utils/contextProvider';

export const FirstsectionShop = () => {
    
    const {DB, setDB, basket, setbasket } = useContext(MyContext);
    const [filter, setFilter] = useState(DB);
    const [selectedCategory, setSelectedCategory] = useState(null); // State to track selected category
    const [selectedPrice, setSelectedPrice] = useState(null); // State to track selected price
    const [selectedBrand, setSelectedBrand] = useState(null); // State to track selected brand
    const [quantity, setquantity] = useState(DB.length); // Initial quantity set to total number of products


    
    const filterProducts = () => {
        let filteredData = DB;
        if (selectedCategory) {
            filteredData = filteredData.filter((element) => element.cat === selectedCategory);
        }
        if (selectedPrice) {
            filteredData = filteredData.filter((element) => element.price <= selectedPrice);
        }
        if (selectedBrand) {
            filteredData = filteredData.filter((element) => element.brand === selectedBrand);
        }
        setFilter(filteredData);
        setquantity(filteredData.length);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(selectedCategory === category ? null : category);
    };

    const handlePriceChange = (price) => {
        setSelectedPrice(selectedPrice === price ? null : price);
    };

    const handleBrandChange = (brand) => {
        setSelectedBrand(selectedBrand === brand ? null : brand);
    };

    useEffect(() => {
        filterProducts();
    }, [selectedCategory, selectedPrice, selectedBrand]);

    const addtobasket = (element)=> {
        let newtab = [...basket]
        let addedProduct = newtab.includes(element)
        if(!addedProduct){
            newtab.push(element)
            setbasket(newtab)
            console.log(basket);
        }else{
            element.quantity+=1
            console.log(basket);

        }

    }
    useEffect(() => {
        console.log(basket);
    }, [basket]);

    return (
        <>
            <div className="w-full h-[50vh] relative">
                <video className="h-full w-full object-cover" muted loop autoPlay>
                    <source src={video} type="video/mp4" />
                </video>
                <div className='absolute top-[35%] left-[25%] lg:left-[38%] text-white'>
                    <h1 className='text-5xl lg:text-7xl w-auto'>Fragrances</h1>
                </div>
            </div>
            <div className='w-full flex gap-4 h-fit px-[10%]'>
                <div className='max-[430px]:hidden w-[25%] h-fit py-5 flex flex-col gap-4 bg-gray-100'>
                    <div className='relative flex justify-center'>
                        <input type="search" className="max-[430px]:hidden rounded pe-3 ps-5 py-2 w-[90%] bg-gray-200 focus:outline-none" placeholder="Type To Search" />
                        <FaSearch className="max-[430px]:left-[50%] absolute top-[50%] translate-y-[-50%] text-gray-400 left-7 " />
                    </div>
                    <div className='w-full flex gap-2 flex-col px-5 '>
                        <h4>Categories</h4>
                        <div className='ps-4 flex gap-2 flex-col'>
                            <label className="cyberpunk-checkbox-label">
                                <input type="checkbox" className="cyberpunk-checkbox" onChange={() => handleCategoryChange("Men")} checked={selectedCategory === "Men"} />
                                Men
                            </label>
                            <label className="cyberpunk-checkbox-label">
                                <input type="checkbox" className="cyberpunk-checkbox" onChange={() => handleCategoryChange("Women")} checked={selectedCategory === "Women"} />
                                Women
                            </label>
                            <label className="cyberpunk-checkbox-label">
                                <input type="checkbox" className="cyberpunk-checkbox" onChange={() => handleCategoryChange("Niche")} checked={selectedCategory === "Niche"} />
                                Niche
                            </label>
                        </div>
                    </div>
                    <div className='w-full flex gap-2 flex-col px-5 '>
                        <h4>Price</h4>
                        <div className='ps-4 flex gap-2 flex-col'>
                            <label className="cyberpunk-checkbox-label">
                                <input type="checkbox" className="cyberpunk-checkbox" onChange={() => handlePriceChange(200)} checked={selectedPrice === 200} />
                                $200 or Less
                            </label>
                            <label className="cyberpunk-checkbox-label">
                                <input type="checkbox" className="cyberpunk-checkbox" onChange={() => handlePriceChange(300)} checked={selectedPrice === 300} />
                                $300 or Less
                            </label>
                            <label className="cyberpunk-checkbox-label">
                                <input type="checkbox" className="cyberpunk-checkbox" onChange={() => handlePriceChange(500)} checked={selectedPrice === 500} />
                                $500 or Less
                            </label>
                            <label className="cyberpunk-checkbox-label">
                                <input type="checkbox" className="cyberpunk-checkbox" onChange={() => handlePriceChange(700)} checked={selectedPrice === 700} />
                                $700 or less
                            </label>
                        </div>
                    </div>
                    <div className='w-full flex gap-2 flex-col px-5 '>
                        <h4>Brand</h4>
                        <div className='ps-4 flex gap-2 flex-col'>
                            {Array.from(new Set(DB.map(element => element.brand))).map((brand, index) => (
                                <label key={index} onClick={() => handleBrandChange(brand)} className="cyberpunk-checkbox-label">
                                    <input type="checkbox" className="cyberpunk-checkbox" checked={selectedBrand === brand} />
                                    {brand}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className='w-full lg:w-[72%] h-fit py-5 flex flex-wrap gap-4 justify-center'>
                    <div className='w-full px-[5%] flex justify-between'>
                        <h4>filter</h4>
                        <h5>{quantity} of {DB.length} Product</h5>
                    </div>
                    {filter.map((element, index) => (
                        <div key={index} className="rounded w-[45%] lg:w-[30%] h-[40vh] lg:h-[50vh]  group   ">
                            <div className="w-full h-[90%] overflow-hidden relative">
                                <img className="w-full h-full object-cover rounded hover:scale-110 transition" src={element.product} alt="img" />
                                <button  onClick={() => addtobasket(element)}  className="bg-[--secondary] hover:bg-[--primary] text-sm hover:text-white w-[80%] py-2 rounded absolute bottom-[-12%] group-hover:bottom-[5%] transition-all delay-200 right-[10%]">Add To Basket</button>
                            </div>
                            <div  className=' pt-3 flex justify-between'>
                                <h6 className='w-[90%]  max-[430px]:text-xs'>{element.title}</h6>
                                <h6 className='max-[430px]:text-xs'>{element.price}$</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};





// import React, { useContext, useState } from 'react';
// import "./shop.scss";
// import video from "../../../assets/videos/Tom Ford - Fougere D'Argent (Spec Ad) (1).mp4";
// import { FaSearch } from "react-icons/fa";
// import { MyContext } from '../../../utils/contextProvider';

// export const FirstsectionShop = () => {
//     const [DB, setDB] = useContext(MyContext);
//     const [selectedCategories, setSelectedCategories] = useState([]);
//     const [selectedPrices, setSelectedPrices] = useState([]);
//     const [selectedBrands, setSelectedBrands] = useState([]);

//     const filterByCategories = (category) => {
//         if (selectedCategories.includes(category)) {
//             setSelectedCategories(selectedCategories.filter(item => item !== category));
//         } else {
//             setSelectedCategories([...selectedCategories, category]);
//         }
//     };

//     const filterByPrice = (price) => {
//         if (selectedPrices.includes(price)) {
//             setSelectedPrices(selectedPrices.filter(item => item !== price));
//         } else {
//             setSelectedPrices([...selectedPrices, price]);
//         }
//     };

//     const filterByBrand = (productBrand) => {
//         if (selectedBrands.includes(productBrand)) {
//             setSelectedBrands(selectedBrands.filter(item => item !== productBrand));
//         } else {
//             setSelectedBrands([...selectedBrands, productBrand]);
//         }
//     };

//     // Apply all selected filters
//     const applyFilters = () => {
//         let filteredData = DB;
//         if (selectedCategories.length > 0) {
//             filteredData = filteredData.filter(element => selectedCategories.includes(element.cat));
//         }
//         if (selectedPrices.length > 0) {
//             filteredData = filteredData.filter(element => selectedPrices.some(price => element.price <= price));
//         }
//         if (selectedBrands.length > 0) {
//             filteredData = filteredData.filter(element => selectedBrands.includes(element.brand));
//         }
//         return filteredData.slice(0, 5);
//     };

//     return (
//         <>
//             <div className="w-full h-[50vh] relative">
//                 <video className="h-full w-full object-cover" muted loop autoPlay>
//                     <source src={video} type="video/mp4" />
//                 </video>
//                 <div className='absolute top-[35%] left-[25%] lg:left-[38%] text-white'>
//                     <h1 className='text-5xl lg:text-7xl w-auto'>Fragrances</h1>
//                 </div>
//             </div>
//             <div className='w-full flex gap-4 h-fit px-[10%]'>
//                 <div className='max-[430px]:hidden w-[25%] h-fit py-5 flex flex-col gap-4 bg-gray-100'>
//                     <div className='relative flex justify-center'>
//                         <input type="search" className="max-[430px]:hidden rounded pe-3 ps-5 py-2 w-[90%] bg-gray-200 focus:outline-none" placeholder="Type To Search" />
//                         <FaSearch className="max-[430px]:left-[50%] absolute top-[50%] translate-y-[-50%] text-gray-400 left-7 " />
//                     </div>
//                     <div className='w-full flex gap-2 flex-col px-5 '>
//                         <h4>Categories</h4>
//                         <div className='ps-4 flex gap-2 flex-col'>
//                             <label className="cyberpunk-checkbox-label">
//                                 <input type="checkbox" className="cyberpunk-checkbox" onChange={() => filterByCategories("Men")} />
//                                 Men
//                             </label>
//                             <label className="cyberpunk-checkbox-label">
//                                 <input type="checkbox" className="cyberpunk-checkbox" onChange={() => filterByCategories("Women")} />
//                                 Women
//                             </label>
//                             <label className="cyberpunk-checkbox-label">
//                                 <input type="checkbox" className="cyberpunk-checkbox" onChange={() => filterByCategories("Niche")} />
//                                 Niche
//                             </label>
//                         </div>
//                     </div>
//                     <div className='w-full flex gap-2 flex-col px-5 '>
//                         <h4>Price</h4>
//                         <div className='ps-4 flex gap-2 flex-col'>
//                             <label className="cyberpunk-checkbox-label">
//                                 <input type="checkbox" className="cyberpunk-checkbox" onChange={() => filterByPrice(200)} />
//                                 $200 or Less
//                             </label>
//                             <label className="cyberpunk-checkbox-label">
//                                 <input type="checkbox" className="cyberpunk-checkbox" onChange={() => filterByPrice(300)} />
//                                 $300 or Less
//                             </label>
//                             <label className="cyberpunk-checkbox-label">
//                                 <input type="checkbox" className="cyberpunk-checkbox" onChange={() => filterByPrice(500)} />
//                                 $500 or Less
//                             </label>
//                             <label className="cyberpunk-checkbox-label">
//                                 <input type="checkbox" className="cyberpunk-checkbox" onChange={() => filterByPrice(700)} />
//                                 $700 or less
//                             </label>
//                         </div>
//                     </div>
//                     <div className='w-full flex gap-2 flex-col px-5 '>
//                         <h4>Brand</h4>
//                         <div className='ps-4 flex gap-2 flex-col'>
//                             <label onClick={() => filterByBrand("creed")} className="cyberpunk-checkbox-label">
//                                 <input type="checkbox" className="cyberpunk-checkbox" />
//                                 Creed
//                             </label>
//                             <label onClick={() => filterByBrand("Boss")} className="cyberpunk-checkbox-label">
//                                 <input type="checkbox" className="cyberpunk-checkbox" />
//                                 Boss
//                             </label>
//                             <label onClick={() => filterByBrand("Tom Ford")} className="cyberpunk-checkbox-label">
//                                 <input type="checkbox" className="cyberpunk-checkbox" />
//                                 Tom Ford
//                             </label>
//                             <label onClick={() => filterByBrand("Georgio Armani")} className="cyberpunk-checkbox-label">
//                                 <input type="checkbox" className="cyberpunk-checkbox" />
//                                 Georgio Armani
//                             </label>
//                             <label onClick={() => filterByBrand("Victor & Rolf")} className="cyberpunk-checkbox-label">
//                                 <input type="checkbox" className="cyberpunk-checkbox" />
//                                 Victor & Rolf
//                             </label>
//                             <label onClick={() => filterByBrand("Dolce Gabbana")} className="cyberpunk-checkbox-label">
//                                 <input type="checkbox" className="cyberpunk-checkbox" />
//                                 Dolce Gabbana
//                             </label>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='w-full lg:w-[72%] h-fit py-5 flex flex-wrap gap-4 justify-center'>
//                     {applyFilters().map((element, index) => (
//                         <div key={index} className="rounded w-[45%] lg:w-[30%] h-[50vh] lg:h-[50vh] overflow-hidden relative">
//                             <div className="w-full h-full">
//                                 <img className="w-full h-full object-cover rounded hover:scale-110 transition" src={element.product} alt="img" />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };
