import { Outlet } from 'react-router-dom'
import { SideMenu } from '../../components'

export const RootLayout = () => {
    return (
        <div className='dashboard'>
            <SideMenu/>
            <div className='w-full'>
                <Outlet/>
            </div>
        
        </div>
    )
}
