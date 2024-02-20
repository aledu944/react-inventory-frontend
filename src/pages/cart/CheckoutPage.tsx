import { CartList, CheckoutForm } from '../../components';
import { HeaderPage } from '../../components/ui/HeaderPage';
import { useCartStore } from '../../stores';

export const CheckoutPage = () => {

    const cart = useCartStore( state => state.cart );

    return (
        <>
            <HeaderPage
                btnPath='/admin/cart'
                btnTitle='Volver'
                description='Genera una nueva venta agergando los detalles'
                title='Finalizar venta'
            />

            {
                cart.length == 0
                ? (
                    <section className='pt-8 text-center text-xl'>
                        <p>No hay productos en el carrito</p>
                    </section>
                )
                : (
                    <div className='checkout'>
                        <CartList/>
                        <CheckoutForm/>
                    </div>

                )

            }
        
        </>
    )
}
