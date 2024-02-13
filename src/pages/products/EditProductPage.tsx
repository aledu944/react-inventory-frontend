import { useParams } from 'react-router-dom'

import { useFetch } from '../../hooks';
import { EditProductForm, HeaderPage } from '../../components'
import { CircularProgress } from '@nextui-org/react';
import { IFullProductResponse } from '../../interfaces';

export const EditProductPage = () => {

    const { slug } = useParams();

    const { data, error, isLoading } = useFetch<IFullProductResponse>(`/products/${slug}`);

    console.log({ data, error, isLoading });



    return (
        <>
            <HeaderPage
                btnPath='/admin/products'
                btnTitle='Volver'
                description='Edita la informacion del producto'
                title='Editar producto'
            />

            {
                isLoading
                ? ( 
                    <section className='container py-8'>
                        <CircularProgress color='primary' className='mx-auto'/>
                    </section>
                )   
                : (
                    <EditProductForm
                        product={ data?.product! }
                    />
                )
            }
        
        </>
    )
}
