import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <main className="overflow-hidden">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
