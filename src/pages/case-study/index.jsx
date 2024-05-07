import Branding from './Branding';
import { useEffect, useState } from 'react';
import ProductDesign from './ProductDesign';
import TestsSection from './TestsSection';

function CaseStudy() {
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
            <TestsSection />
            <Branding />
            <ProductDesign screenSize={screenSize} />
        </>
    );
}
export default CaseStudy;
