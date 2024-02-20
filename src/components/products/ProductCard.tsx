import { useCartStore } from '../../stores';
import { ISimpleProduct } from '../../interfaces'

import { Button } from '@nextui-org/react';
import { LuShoppingCart } from 'react-icons/lu';


interface Props {
    product: ISimpleProduct
}

export const ProductCard = ({ product }: Props) => {

    const addProductToCart = useCartStore(state => state.addProductToCart);


    const baseUrlImage = import.meta.env.VITE_IMAGE_URL;

    return (
        <li className='product__card'>
            <img className='mb-4' src={ baseUrlImage + product.image } alt={ product.name } />
            
            <h3 className='font-bold'>{ product.name }</h3>

            <div className='text-sm mb-2'>
                <p>{ product.category.name }</p>

                <p>Precio: { product.price } Bs</p>
                <p>Stock: { product.stock }u.</p>
            </div>

            <Button onClick={ () => addProductToCart( product ) } className='btn-primary' startContent={ <LuShoppingCart/> } fullWidth>Agregar al carrito</Button>
        </li>
    )
}
