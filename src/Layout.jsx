import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GetTouch from './components/GetTouch';

function Layout() {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <>
            <Header />
            <main className="overflow-hidden">
                <Outlet />
            </main>
            <div className="bg-gray-75 pt-16 lg:pt-24 lg:mt-10">
                <GetTouch screenSize={screenSize} />
                <Footer />
            </div>
        </>
    );
}

export default Layout;
