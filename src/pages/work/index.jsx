import { useEffect, useState } from 'react';
import WorkSection from './WorkSection';
function Work() {
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
            <WorkSection screenSize={screenSize} />
        </>
    );
}

export default Work;
