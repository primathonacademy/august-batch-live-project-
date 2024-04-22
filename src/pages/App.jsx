import { Route, Routes } from 'react-router-dom';

import Layout from '../Layout';
import { ROUTES } from '../constants/app-constant';
import About from './about';
import Contact from './contact';
import Casestudy from './case-study';
import Insight from './insight';
import InsightDetail from './insight-detail';
import Work from './work';
import Service from './service';
import HomePage from './homepage';



const App = () => {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={ROUTES.HOME} element={<HomePage/>} />
                    <Route path={ROUTES.ABOUT} element={<About />} />
                    <Route path={ROUTES.CONTACT} element={<Contact />} />
                    <Route path={ROUTES.CASE_STUDY} element={<Casestudy />} />
                    <Route path={ROUTES.INSIGHT} element={<Insight />} />
                    <Route path={ROUTES.INSIGHT_DETAIL} element={<InsightDetail />} />
                    <Route path={ROUTES.WORK} element={<Work />} />
                    <Route path={ROUTES.SERVICE} element={<Service />} />
                    {/* 404 */}
                    <Route path="*" element={<h1>404 — Page Not Found</h1>} />
                </Route>
            </Routes>

           
        </>
    );
};

export default App;
