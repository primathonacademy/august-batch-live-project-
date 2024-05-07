import Branding from './Branding';
import { useEffect, useState } from 'react';
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
            <Branding />
            <ProductDesign screenSize={screenSize} />
        </>
    );
}
export default CaseStudy;
