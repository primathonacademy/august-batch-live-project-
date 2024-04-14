import ArtSection from '../components/Home/ArtSection';
import { BrowserRouter } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <div>
                <ArtSection />
            </div>
        </BrowserRouter>
    );
}

export default App;
