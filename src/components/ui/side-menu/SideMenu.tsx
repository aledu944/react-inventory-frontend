import { Link, useLocation } from "react-router-dom"
import { sidemenuOptions } from '../../../lib/constants';
import Logo from "../../../assets/logo.svg";
import { Button } from "@nextui-org/react";
import { useAuthStore } from "../../../stores";

export const SideMenu = () => {

    const { pathname } = useLocation();
    const logout = useAuthStore(state => state.logout);
    const user = useAuthStore(state => state.user);

    return (
        <aside className="sidemenu">
            <div className="sidemenu__logo">
                <img src={Logo} alt="Logo" className="max-w-[50px]" />
                <div className="leading-[.5]">
                    <h1 className="font-bold text-xl">Gesty</h1>
                    <p className="text-sm font-light">Gestiona tu inventario</p>
                </div>
            </div>


            <ul className="space-y-4">
                {
                    sidemenuOptions.map(option => (
                        <li key={option.path}>
                            <Link className={`sidemenu__link ${pathname.includes(option.path) && 'sidemenu__link--active'} `} to={{ pathname: option.path }}>
                                <span>{option.icon}</span>
                                {option.name}
                            </Link>

                        </li>

                    ))
                }
            </ul>

            <div className="flex-1"></div>

            <div className="shadow-lg bg-stone-900 px-4 py-6 rounded-2xl text-center">
                <img className="mx-auto max-w-14 mb-4" src="https://lh3.googleusercontent.com/a/ACg8ocK2GAvSNuwN-zRMJkMVv8UPMuwaDZVyBGHyPR-pU4ei1S4=s96-c-rg-br100" />
                <h3>{user?.name}</h3>
                <p className="text-sm">{user?.email}</p>
                <Button onClick={logout} className="mt-4" variant="light" color="danger" fullWidth>Cerrar Sesion</Button>
            </div>




        </aside>
    )
}
