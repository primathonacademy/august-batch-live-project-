import { useEffect, useState } from 'react';
import OurService from './OurService';

function InsightDetail() {
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
            <OurService screenSize={screenSize} />
        </div>
    );
}

export default InsightDetail;
