import { Home } from './pages/Home/home.jsx';
import { AboutUs } from './pages/AboutUs/aboutUs.jsx';
import { ContactUs } from './pages/ContactUs/contactUs.jsx';

import { Route, Routes } from 'react-router-dom';
import { Error } from './pages/Errors/error.jsx';
import Footer from './layouts/footer.jsx';
import Header from './layouts/header.jsx';
import { MyProvider } from './utils/contextProvider.jsx';
import { Shop } from './pages/Shop/shop.jsx';
import { Product } from './pages/product/product.jsx';



function App() {
    return (
        <>
            <MyProvider>
                <Header />
                <div className='h-[10vh]'></div>
                <Routes>
                    <Route path='*' element={<Error />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/contact' element={<ContactUs />} />
                    <Route path='/shop' element={<Shop />}/>
                    <Route path='/product' element={<Product />}/>


                </Routes>
                <Footer />
            </MyProvider>
        </>
    );
}

export default App;
