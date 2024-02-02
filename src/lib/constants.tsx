import { LuAreaChart, LuClipboardList, LuLayers, LuShoppingCart } from "react-icons/lu";

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