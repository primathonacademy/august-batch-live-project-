import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <main className="overflow-hidden">
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
