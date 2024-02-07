import { Link, useLocation } from "react-router-dom"
import { sidemenuOptions } from '../../../lib/constants';
import Logo from "../../../assets/logo.svg";

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




        </aside>
    )
}
