import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div>
            <main className="overflow-hiden">
                <Outlet />
            </main>
        </div>
    );
}
