import { Toaster } from "sonner";
import Logo from "../../assets/logo.svg";
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from "../../stores";

export const AuthLayout = () => {


    const authStatus = useAuthStore( state => state.authStatus );
    const checkAuthStatus = useAuthStore( state => state.checkAuthStatus );
  
    if ( authStatus === 'pending' ) {
      checkAuthStatus();
      return <>Loading...</>;
    }
  
    if ( authStatus === 'authenticated' ) {
      return <Navigate to='/admin/products' />;
    }
  

    return (
        <>
            <Toaster
                position='top-center'
                richColors
                closeButton
                style={{ position: 'absolute' }}
            />
            <section className='auth__layout'>
                <div className="flex items-center mb-4">
                    <img src={Logo} alt="Logo" className="max-w-[70px]" />
                    <div className="leading-[.5]">
                        <h1 className="font-bold text-2xl">Gesty</h1>
                        <p>Gestiona tu inventario</p>
                    </div>
                </div>

                <Outlet />

            </section>
        </>
    )
}
