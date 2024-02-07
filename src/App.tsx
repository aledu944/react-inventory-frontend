import { Outlet } from "react-router-dom"

const App = () => {
    return (
        <main className="relative">
            <Outlet/>
        </main>
    )
}

export default App