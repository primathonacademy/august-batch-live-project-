import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Layout';
import About from './about';
import CaseStudy from './case-study';
import Contact from './contact';
import Homepage from './homepage';
import Insights from './insights';
import InsightDetail from './insight-detail';
import Service from './service';
import Work from './work';
import { ROUTES } from '../constants/index';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={ROUTES.HOME} element={<Homepage />} />
                    <Route path={ROUTES.CONTACT} element={<Contact />} />
                    <Route path={ROUTES.ABOUT} element={<About />} />
                    <Route path={ROUTES.CASE_STUDY} element={<CaseStudy />} />
                    <Route path={ROUTES.INSIGHT} element={<Insights />} />
                    <Route path={ROUTES.INSIGHT_DETAIL} element={<InsightDetail />} />
                    <Route path={ROUTES.WORK} element={<Work />} />
                    <Route path={ROUTES.SERVICE} element={<Service />} />
                    {/* 404 */}
                    <Route path="*" element={<h1>404 — Page Not Found</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
