import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const Layout = () => {
    return (
        <>
            <main className="overflow-hidden">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout 