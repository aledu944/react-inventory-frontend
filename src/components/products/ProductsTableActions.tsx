
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { Button } from '@nextui-org/react';
import { useProductStore } from '../../stores';
import { LuEye, LuPen, LuTrash2 } from 'react-icons/lu'

interface Props {
    productId: string;
    productSlug: string;
}

export const ProductsTableActions = ({ productId, productSlug }: Props) => {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);


    const getProducts = useProductStore( state => state.getProducts );
    const deleteProduct = useProductStore( state => state.deleteProduct );


    const handleNavigate = (url: string) => {
        navigate(url)
    }

    const handleDelete = async () => {
        setIsLoading(true);
        await deleteProduct(productId)
        setIsLoading(false);
        await getProducts();
    }   


    return (
        <>
            <Button
                isIconOnly
                color='primary'
                variant='light'
                startContent={<LuEye size={18} />}
            />

            <Button
                isIconOnly
                onClick={ () => handleNavigate(`${ productSlug }/edit`) }
                color='success'
                variant='light'
                startContent={<LuPen size={18} />}
            />

            <Button
                isIconOnly
                isLoading={ isLoading }
                isDisabled={ isLoading }
                onClick={handleDelete}
                color='danger'
                variant='light'
                startContent={<LuTrash2 size={18} />}
            />
        </>
    )
}
