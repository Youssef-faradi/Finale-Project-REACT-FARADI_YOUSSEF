import React, { createContext, useState } from "react"


export const MyContext = createContext()

export const MyProvider = ({ children }) => {


    const [DB, setDB] = useState([
        {
            title: "Creed Rouyal-Oud",
            product: require('../assets/images/men.jpg'),
            type: "old",
            price: 300,
            quantity: 1,
            cat: "men",
            brand: "creed"

        },
        {
            title: "Tom Ford Tuscan Leather ",
            product: require('../assets/images/niche.jpg'),
            type: "old",
            price: 500,
            quantity: 1,
            cat: "men",
            brand: "Tom Ford"
        },
        {
            title: "Azzaro Most Wanted",
            product: require('../assets/images/seller.jpg'),
            type: "old",
            price: 250,
            quantity: 1,
            cat: "men",
            brand: "oreal"
        },
        {
            title: "Spice Bomb Infrared",
            product: require('../assets/images/bombInfrared.jpg'),
            type: "old",
            price: 400,
            quantity: 1,
            cat: "men",
            brand: "Victor & Rolf"
        },
        {
            title: "Spice Bomb Night Vision",
            product: require('../assets/images/bombNightvision.jpg'),
            type: "sale",
            price: 250,
            quantity: 1,
            cat: "men",
            brand: "Victor & Rolf"
        },
        {
            title: "Spice Bomb",
            product: require('../assets/images/bombViktor.jpg'),
            type: "new",
            price: 350,
            quantity: 1,
            cat: "men",
            brand: "Victor & Rolf"
        },
        {
            title: "Boss Infinite",
            product: require('../assets/images/boss1.jpg'),
            type: "sale",
            price: 150,
            quantity: 1,
            cat: "men",
            brand: "boss"
        },
        {
            title: "Boss",
            product: require('../assets/images/boss2.jpg'),
            type: "new",
            price: 300,
            quantity: 1,
            cat: "men",
            brand: "boss"
        },
        {
            title: "Creed Viking",
            product: require('../assets/images/creed.jpg'),
            type: "sale",
            price: 320,
            quantity: 1,
            cat: "men",
            brand: "creed"
        },
        {
            title: "Creed Aventus",
            product: require('../assets/images/creedAventus.jpg'),
            type: "new",
            price: 200,
            quantity: 1,
            cat: "men",
            brand: "creed"
        },
        {
            title: "Boss ELixir",
            product: require('../assets/images/disigner.jpg'),
            type: "sale",
            price: 220,
            quantity: 1,
            cat: "men",
            brand: "boss"
        },
        {
            title: "Dolce Gabbana The One",
            product: require('../assets/images/dolcegaban.jpg'),
            type: "old",
            price: 130,
            quantity: 1,
            cat: "men",
            brand: "Dolce Gabbana"
        },
        {
            title: "Aqua Di Gio Pour L'Homme",
            product: require('../assets/images/gio.jpg'),
            type: "new",
            price: 170,
            quantity: 1,
            cat: "men",
            brand: "Georgio Armani"
        },
        {
            title: "Aqua Di Gio Absolute",
            product: require('../assets/images/gioAbsolute.jpg'),
            type: "sale",
            price: 180,
            quantity: 1,
            cat: "men",
            brand: "Georgio Armani"
        },
        {
            title: "Azzaro Most Wanted ",
            product: require('../assets/images/mostwanted.jpg'),
            type: "old",
            price: 240,
            quantity: 1,
            cat: "men",
            brand: "Georgio Armani"
        },
        {
            title: "Fakhr Lattafa",
            product: require('../assets/images/seller.jpg'),
            type: "old",
            price: 600,
            quantity: 1,
            cat: "men",
            brand: "lattafa"
        },
        {
            title: "Tom Ford Omber Leather",
            product: require('../assets/images/tomford2.jpg'),
            type: "old",
            price: 470,
            quantity: 1,
            cat: "men",
            brand: "Tom Ford"
        },
        {
            title: "Ellie Saab Le Parfum",
            product: require('../assets/images/woman.jpg'),
            type: "sale",
            price: 230,
            quantity: 1,
            cat: "women",
            brand: "ellie"
        },
        {
            title: "Baccarat Rouge",
            product: require('../assets/images/unisex.jpg'),
            type: "sale",
            price: 540,
            quantity: 1,
            cat: "men",
            brand: "baccarat"
        },
        {
            title: "Tom Ford Tobacco Vanille ",
            product: require('../assets/images/tomford1.jpg'),
            type: "new",
            price: 530,
            quantity: 1,
            cat: "men",
            brand: "Tom Ford"
        },
        {
            title: "Tom Ford Oud Wood ",
            product: require('../assets/images/tomford3.jpg'),
            type: "old",
            price: 580,
            quantity: 1,
            cat: "men",
            brand: "Tom Ford"
        },
        
    ])
    const [basket,setbasket]=useState([])


    return (
        <>

            <MyContext.Provider value={{DB, setDB, basket ,setbasket}} >
                {children}
            </MyContext.Provider>

        </>
    )


}