import {Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <div>
        <main className="overflow-hidden">
            <Outlet />
        </main>
    </div>
  )
}

export default Layout