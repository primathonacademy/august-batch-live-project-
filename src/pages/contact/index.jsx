import FormSection from './FormSection';
import { useState, useEffect } from 'react';

function Contact() {
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
            <FormSection screenSize={screenSize} />
        </div>
    );
}

export default Contact;
