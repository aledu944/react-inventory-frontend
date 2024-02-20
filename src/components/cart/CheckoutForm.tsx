import { Button, Input } from '@nextui-org/react'
import { useCartStore } from '../../stores'

export const CheckoutForm = () => {
    
    const total = useCartStore(state => state.total);
    
    
    return (
        <section className='col-span-3'>

            <div className='mb-6'>
                <h2 className='font-bold text-2xl'>Completa la venta</h2>
                <p>Completa los detalles de la venta</p>
            </div>

            <form className='checkout__form'>
                <Input
                    size='sm'
                    label="Nombre del cliente"
                />

                <p className='font-semibold text-xl'>Total: { total }</p>

                <Button className='btn-primary w-full'>Confirmar venta</Button>

            </form>

        </section>
    )
}
