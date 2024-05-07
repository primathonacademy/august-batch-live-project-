import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './about';
import Contact from './contact';
import CaseStudy from './case-study';
import Insights from './insights';
import InsightDetail from './insight-detail';
import Work from './work';
import Service from './service';
import Layout from '../Layout';
import HomePage from './homepage';
import { ROUTES } from '../constants';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={ROUTES.HOME} element={<HomePage />} />
                    <Route path={ROUTES.CONTACT} element={<Contact />} />
                    <Route path={ROUTES.ABOUT} element={<About />} />
                    <Route path={ROUTES.CASE_STUDY} element={<CaseStudy />} />
                    <Route path={ROUTES.INSIGHT} element={<Insights />} />
                    <Route path={ROUTES.INSIGHT_DETAIL} element={<InsightDetail />} />
                    <Route path={ROUTES.WORK} element={<Work />} />
                    <Route path={ROUTES.SERVICE} element={<Service />} />
                    <Route path="*" element={<h1>404 - Page Not Found</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
