import { useEffect } from 'react'
import { ProductCard } from './ProductCard'
import { useProductStore } from '../../stores';


export const ProductList = () => {

    const products = useProductStore(state => state.products);
    const getProducts = useProductStore(state => state.getProducts);

    useEffect(() => {
        if (products.length === 0) {
            getProducts();
        }
    }, [])


    return (
        <section className='pt-8'>
            <div className="container">
                <ul className='product__list'>
                    {
                        products.map(product => (
                            <ProductCard product={product} key={product.id} />
                        ))
                    }

                </ul>
            </div>
        </section>
    )
}
