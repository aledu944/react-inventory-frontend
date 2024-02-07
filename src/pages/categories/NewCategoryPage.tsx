import { HeaderPage, NewCategoryForm } from '../../components'

export const NewCategoryPage = () => {
    return (
        <>
            <HeaderPage
                btnPath='/admin/categories'
                btnTitle='Volver'
                description='Crea una nueva categoria en el sistema'
                title='Agrega una categoria'
            />
            <NewCategoryForm/>
        
        
        </>
    )
}
