import { useEffect, useState } from 'react';
import AboutSection from './AboutSection';

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
        </>
    );
};

export default About;
