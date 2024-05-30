import { useEffect, useState } from 'react';
import AboutSection from './AboutSection';
import BrandSection from './BrandSection';
import FounderSection from './FounderSection';
import PartnerSection from './PartnerSection';

const About = () => {
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
            <AboutSection screenSize={screenSize} />
            <BrandSection />
            <FounderSection />
            <PartnerSection />
        </>
    );
};

export default About;
