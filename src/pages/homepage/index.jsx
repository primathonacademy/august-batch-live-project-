import { useEffect, useState } from 'react';
import PosterSection from './PosterSection';
import CustomerLoveSection from './CustomerLoveSection';
import ArtSection from './ArtSection';
import ExploreServiceSection from './ExploreServiceSection';

const HomePage = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div>
            <PosterSection />
            <ExploreServiceSection screenSize={screenSize} />
            <CustomerLoveSection />
            <ArtSection />
        </div>
    );
};

export default HomePage;
