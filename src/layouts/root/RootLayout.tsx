import { Outlet } from 'react-router-dom'
import { SideMenu } from '../../components'
import { Toaster } from 'sonner'

export const RootLayout = () => {
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
