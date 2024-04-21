import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <main className="overflow-hidden">
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
