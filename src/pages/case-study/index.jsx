import { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import StatementSection from './StatementSection';
import TestsSection from './TestsSection';
import Branding from './Branding';
import ProductDesign from './ProductDesign';

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
            <HeroSection />
            <StatementSection />
            <TestsSection />
            <Branding />
            <ProductDesign screenSize={screenSize} />
        </>
    );
}
export default CaseStudy;
