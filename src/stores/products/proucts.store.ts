import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";

import { IProductsResponse, ISimpleProduct } from "../../interfaces";
import inventoryDb from "../../api/inventoryDb";
import { toast } from "sonner";
import { isAxiosError } from "axios";

interface ProductState {
    products: ISimpleProduct[];
}


interface Actions {
    getProducts: () => Promise<void>;
    createProduct: (
        product: { name: string, description: string, price: string, stock: string },
        image: File 
    ) => Promise<void>;
}



const storeApi: StateCreator<ProductState & Actions> = (set) => ({
    products: [],

    getProducts: async () => {
        const { data } = await inventoryDb.get<IProductsResponse>('/products');
        set(() => ({ 
            products: data.products
        }))
    },

    createProduct: async (product, image) => {
        const formData = new FormData();
        formData.append('image', image);

        try {
            const { data: imageUrl } = await inventoryDb.post('/upload', formData);

            if( !imageUrl ){
                toast.error('No se proceso la imagen')
                return;
            }

            const { data } = await inventoryDb.post('/products', {
                ...product,
                image: imageUrl
            })
    
            toast.success(data.message);
            
        } catch (error) {
            console.log(error)
            if( isAxiosError( error ) ){
                toast.error('Ocurrio un error',{
                    description: error.response?.data.message
                })
            }
        }


    },

})


export const useProductStore = create<ProductState & Actions>()(
    persist(
        storeApi,
        { name: "products-storage"}
    )

);