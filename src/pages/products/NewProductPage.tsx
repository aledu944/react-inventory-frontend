import { HeaderPage, NewProductForm } from "../../components"


export const NewProductPage = () => {
    return (
        <>
            <HeaderPage
                btnPath="/admin/products"
                btnTitle="Volver"
                title="Agregar producto"
                description="Agrega un producto a tu inventario"
            />
            <NewProductForm/>
        </>
    )
}
