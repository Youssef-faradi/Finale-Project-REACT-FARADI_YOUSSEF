import { Home } from './pages/Home/home.jsx';
import { AboutUs } from './pages/AboutUs/aboutUs.jsx';
import { ContactUs } from './pages/ContactUs/contactUs.jsx';
import { Route, Routes } from 'react-router-dom';
import { Error } from './pages/Errors/error.jsx';
import Header from './layouts/header.jsx';
import { NextUIProvider } from "@nextui-org/react";

function App() {
    return (
        <>
            <NextUIProvider>

                <Header />
                
                <Routes>
                    <Route path='*' element={<Error />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/contact' element={<ContactUs />} />
                </Routes>

            </NextUIProvider>
        </>
    );
}

export default App;
