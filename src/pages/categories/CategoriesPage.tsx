
import { useEffect } from 'react'
import { CategoriesTable, HeaderPage } from '../../components'
import { useCategoryStore } from '../../stores'

export const CategoriesPage = () => {

    const categories = useCategoryStore(state => state.categories )
    const getCategories = useCategoryStore(state => state.getCategories )

    useEffect(() => {
        if( categories.length === 0 ) getCategories();
    }, [])
    

    return (
        <>
            <HeaderPage
                btnPath='new'
                btnTitle='Crear categoria'
                description='Gestion de categorias de productos'
                title='Categorias'
            />
            <CategoriesTable
                categories={ categories }
            />
        </>
    )
}
