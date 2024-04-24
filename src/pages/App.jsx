import { Routes, Route } from "react-router-dom";
import Layout from '../Layout';
import About from './about';
import CaseStudy from './case-study';
import Contact from './contact';
import HomePage from './homepage';
import InsightDetail from './insight-detail';
import Insight from './insights';
import Service from './service';
import Work from './work';
import { ROUTES } from '../constants/';

const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path={ROUTES.HOME} element={<HomePage />} />
                <Route path={ROUTES.ABOUT} element={<About />} />
                <Route path={ROUTES.CONTACT} element={<Contact />} />
                <Route path={ROUTES.CASE_STUDY} element={<CaseStudy />} />
                <Route path={ROUTES.INSIGHT} element={<Insight />} />
                <Route path={ROUTES.INSIGHT_DETAIL} element={<InsightDetail />} />
                <Route path={ROUTES.WORK} element={<Work />} />
                <Route path={ROUTES.SERVICE} element={<Service />} />
                {/* 404 */}
                <Route path="*" element={<h1>404 — Page Not Found</h1>} />
            </Route>
        </Routes>
    );
};

export default App;