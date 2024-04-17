import { BrowserRouter } from 'react-router-dom';
import Service from './service';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Service />
            </div>
        </BrowserRouter>
    );
};

export default App;
