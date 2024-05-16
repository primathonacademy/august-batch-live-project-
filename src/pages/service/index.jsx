import { useState, useEffect } from 'react';
import OurServicePosterSection from './OurServicePosterSection';
import Research from './Research';
import OurEngagement from './OurEngagement';
import CoFounder from './CoFounder';
import SelectedProjects from './SelectedProjects';

const Service = () => {
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
            <OurServicePosterSection screenSize={screenSize} />
            <Research screenSize={screenSize} />
            <OurEngagement />
            <CoFounder />
            <SelectedProjects screenSize={screenSize} />
        </>
    );
};
export default Service;
