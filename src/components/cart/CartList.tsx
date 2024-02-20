import { Button } from '@nextui-org/react';
import { useCartStore } from '../../stores'
import { LuMinus, LuPlus, LuTrash2 } from 'react-icons/lu';

export const CartList = () => {

    const cart = useCartStore(state => state.cart);
    const incrementQuantity = useCartStore(state => state.incrementQuantity);
    const decrementQuantity = useCartStore(state => state.decrementQuantity);
    const removeProductToCart = useCartStore(state => state.removeProductToCart);
    const baseUrlImage = import.meta.env.VITE_IMAGE_URL;

    return (
        <section className='col-span-2'>
            <ul className='space-y-6'>
                {
                    cart.map(item => (
                        <li key={item.id} className='cart__item'>
                            <div className='max-w-[80px]'>
                                <img className='w-full' src={baseUrlImage + item.image} alt={item.name} />
                            </div>

                            <div className='space-y-2'>
                                <h4>Nombre: {item.name}</h4>
                                <p>Precio: {item.price}</p>
                                <div className='gap-2 flex items-center'>
                                    <Button 
                                        onClick={() => decrementQuantity( item.id )} 
                                        isIconOnly 
                                        size='sm' 
                                        className='rounded-full' 
                                        startContent={ <LuMinus/> }
                                    />
                                    Cantidad: {item.quantity}
                                    <Button onClick={() => incrementQuantity( item.id )} isIconOnly size='sm' className='rounded-full' startContent={ <LuPlus/> }/>
                                    <Button onClick={() => removeProductToCart( item.id )} isIconOnly size='sm' color="danger" className='rounded-full' startContent={ <LuTrash2/> }/>
                                </div>
                            </div>
                        </li>


                    ))
                }
            </ul>
        </section>
    )
}
