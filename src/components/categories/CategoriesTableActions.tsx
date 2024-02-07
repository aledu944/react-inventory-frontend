import { useState } from 'react';

import { useCategoryStore } from '../../stores'

import { LuTrash2 } from 'react-icons/lu'
import { Button } from '@nextui-org/react'
import { EditCategoryModal } from './EditCategoryModal';

interface Props {
    categoryId: string | number;
    categoryName: string;
}


export const CategoriesTableActions = ({ categoryId, categoryName }: Props) => {

    const [isLoading, setIsLoading] = useState(false);

    const getCategories = useCategoryStore(state => state.getCategories);
    const deleteCategory = useCategoryStore(state => state.deleteCategory);


    const handleDeleteCategory = async () => {
        setIsLoading(true);
        await deleteCategory(categoryId);
        await getCategories();
        setIsLoading(false);
    }

    return (
        <div>
            <EditCategoryModal categoryId={ categoryId } categoryName={ categoryName }/>
            <Button
                isIconOnly
                color='danger'
                variant='light'
                isLoading={isLoading}
                isDisabled={isLoading}
                onPress={handleDeleteCategory}
                startContent={<LuTrash2 size={18} />}
            />

        </div>
    )
}
