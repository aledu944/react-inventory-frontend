import { Link, useLocation } from "react-router-dom"
import { sidemenuOptions } from '../../../lib/constants';
import Logo from "../../../assets/logo.svg";
import { Button } from "@nextui-org/react";

export const SideMenu = () => {

    const { pathname } = useLocation();


    return (
        <aside className="sidemenu">
            
            <div className="sidemenu__logo">
                <img className="max-w-[50px]" src={ Logo } alt="Inventario" />
                Inventario
            </div>


            <ul className="space-y-4">
                {
                    sidemenuOptions.map(option => (
                        <li key={ option.path }>
                            <Link className={`sidemenu__link ${ pathname.includes(option.path) && 'sidemenu__link--active' } `} to={{ pathname: option.path }}>
                                <span>{ option.icon }</span>
                                { option.name }
                            </Link> 

                        </li>

                    ))
                }
            </ul>

            <div className="flex-1"></div>
            
            <div className="shadow-lg bg-stone-900 px-4 py-6 rounded-2xl text-center">
                <img className="mx-auto max-w-14 mb-4" src="https://lh3.googleusercontent.com/a/ACg8ocK2GAvSNuwN-zRMJkMVv8UPMuwaDZVyBGHyPR-pU4ei1S4=s96-c-rg-br100"/>
                <h3>Innova Code</h3>
                <p className="text-sm">admin@innovacode.online</p>
                <Button className="mt-4" variant="light" color="danger" fullWidth>Cerrar Sesion</Button>
            </div>




        </aside>
    )
}
