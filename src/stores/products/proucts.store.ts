import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";

import { IProductsResponse, ISimpleProduct } from "../../interfaces";
import inventoryDb from "../../api/inventoryDb";

interface ProductState {
    products: ISimpleProduct[];
}


interface Actions {
    getProducts: () => void;
}



const storeApi: StateCreator<ProductState & Actions> = (set) => ({
    products: [],

    getProducts: async () => {
        const { data } = await inventoryDb.get<IProductsResponse>('/products');
        set(() => ({ 
            products: data.products
        }))
    }

})


export const useProductStore = create<ProductState & Actions>()(
    persist(
        storeApi,
        { name: "products-storage"}
    )

);