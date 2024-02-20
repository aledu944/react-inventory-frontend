import { Navigate, Outlet, useLocation } from "react-router-dom"

const App = () => {
    const { pathname } = useLocation();

    if (pathname === '/') {
        return <Navigate to="/admin" />;
    }

    return (
        <main className="relative">
            <Outlet />
        </main>
    )
}

export default App