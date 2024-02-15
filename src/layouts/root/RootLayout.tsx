import { Navigate, Outlet } from 'react-router-dom'
import { SideMenu } from '../../components'
import { Toaster } from 'sonner'
import { useAuthStore } from '../../stores';

export const RootLayout = () => {


    const authStatus = useAuthStore( state => state.authStatus );
    const checkAuthStatus = useAuthStore( state => state.checkAuthStatus );
  
    if ( authStatus === 'pending' ) {
      checkAuthStatus();
      return <>Loading...</>
    }
  
    if ( authStatus === 'not-authenticated' ) {
      return <Navigate to='/auth/login' />
    }

    return (
        <>
            <div className='dashboard'>
                <Toaster
                    position='top-right'
                    richColors
                    closeButton
                    style={{  position: 'absolute' }}
                />
                <SideMenu />
                <div className='w-full'>
                    <Outlet />
                </div>

            </div>
        </>
    )
}
