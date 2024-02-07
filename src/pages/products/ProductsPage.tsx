import { useEffect } from "react";
import { HeaderPage, ProductsTable } from "../../components"
import { useProductStore } from "../../stores";

export const ProductsPage = () => {

    const getProducts = useProductStore(state => state.getProducts);
    const products = useProductStore(state => state.products);

    useEffect(() => {
        getProducts();
    }, [])


    return (
        <>
            <HeaderPage
                btnPath="/products/new"
                btnTitle="Crear producto"
                title="Productos"
                description="Gestiona los productos de tu inventario"
            />
            <ProductsTable
                products={ products }
            />
        </>
    )
}
