import { useEffect, useState } from "react";
import OurServicePosterSection from "../components/OurServicePosterSection";

const App = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    useEffect(()=>{
        const handleResize = () =>{
            setScreenSize(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[]);

    return (
        <>
        
        <OurServicePosterSection screenSize={screenSize}/>
        
        </>
    )
};

export default App;
