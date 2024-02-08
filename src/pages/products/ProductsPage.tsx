import { useEffect } from "react";

import { useProductStore } from "../../stores";
import { HeaderPage, ProductsTable } from "../../components"


export const ProductsPage = () => {

    const getProducts = useProductStore(state => state.getProducts);
    const products = useProductStore(state => state.products);

    useEffect(() => {
        getProducts();
    }, [])


    return (
        <>
            <HeaderPage
                btnPath="new"
                btnTitle="Crear producto"
                title="Productos"
                description="Gestiona los productos de tu inventario"
            />
            <ProductsTable
                products={products}
            />
        </>
    )
}
