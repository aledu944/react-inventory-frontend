import { useEffect } from 'react';
import { HeaderPage, ProductList } from '../../components'
import { useProductStore } from '../../stores'

export const CartPage = () => {



    return (
        <>
            <HeaderPage
                btnPath='/admin/cart/checkout'
                btnTitle='Finalizar compra'
                description='Agrega productos al carrito'
                title='Carrito de compras'
            />

            <ProductList/>
        
        </>
    )
}
