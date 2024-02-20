import { CartList, CheckoutForm } from '../../components';
import { HeaderPage } from '../../components/ui/HeaderPage';

export const CheckoutPage = () => {
    return (
        <>
            <HeaderPage
                btnPath='/admin/cart'
                btnTitle='Volver'
                description='Genera una nueva venta agergando los detalles'
                title='Finalizar venta'
            />

            <div className='checkout'>
                <CartList/>

                <CheckoutForm/>

            </div>
        
        </>
    )
}
