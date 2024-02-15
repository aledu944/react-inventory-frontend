import { LuAreaChart, LuClipboardList, LuLayers, LuShoppingCart, LuUsers2 } from "react-icons/lu";

export const sidemenuOptions = [
    {
        path: 'products',
        name: 'Productos',
        icon: <LuClipboardList />
    },
    {
        path: 'categories',
        name: 'Categorias',
        icon: <LuLayers />
    },
    {
        path: 'users',
        name: 'Usuarios',
        icon: <LuUsers2 />
    },
    {
        path: 'cart',
        name: 'Carrito',
        icon: <LuShoppingCart />
    },
    {
        path: 'sales',
        name: 'Ventas',
        icon: <LuAreaChart />
    },
]