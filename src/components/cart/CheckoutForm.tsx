import { Button, Input } from '@nextui-org/react'
import { useCartStore, useSaleStore } from '../../stores'
import { useState } from 'react';

export const CheckoutForm = () => {
    
    const cart = useCartStore(state => state.cart);
    const total = useCartStore(state => state.total);
    const cleanCart = useCartStore(state => state.cleanCart);
    
    const createNewSale = useSaleStore(state => state.createNewSale);
    

    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const { client } = e.target as HTMLFormElement;

        await createNewSale( client.value, cart, total);

        setIsLoading(false);

        client.value = "";
        cleanCart();


    }
    
    return (
        <section className='col-span-3'>

            <div className='mb-6'>
                <h2 className='font-bold text-2xl'>Completa la venta</h2>
                <p>Completa los detalles de la venta</p>
            </div>

            <form onSubmit={handleSubmit} className='checkout__form'>
                <Input
                    size='sm'
                    name='client'
                    label="Nombre del cliente"
                />

                <p className='font-semibold text-xl'>Total: { total }</p>

                <Button 
                    type='submit'
                    isLoading={ isLoading } 
                    isDisabled={ isLoading } 
                    className='btn-primary w-full'
                >
                    Confirmar venta
                </Button>

            </form>

        </section>
    )
}
