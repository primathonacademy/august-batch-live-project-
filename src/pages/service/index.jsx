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
            <div className="px-5 py-20 md:px-14 lg:px-20 lg:pt-24 xl:px-24 2xl:px-28 2xl:pt-28 3xl:px-45.5">
                <SelectedProjects screenSize={screenSize} />
            </div>
        </>
    );
};
export default Service;
