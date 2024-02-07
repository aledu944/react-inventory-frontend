import { StateCreator, create } from "zustand";
import { toast } from "sonner";
import { isAxiosError } from "axios";

import inventoryDb from "../../api/inventoryDb";
import { ICategory } from "../../interfaces";

interface CategoryState {
    categories: ICategory[];
}

interface Actions {
    getCategories:  () => Promise<void>;
    createCateogry: ( name: string ) => Promise<void>;
    deleteCategory: ( id: string | number ) => Promise<void>;
    updateCateogry: ( id: string | number, name: string ) => Promise<void>;
}

const storeApi: StateCreator<CategoryState & Actions> = (set) => ({
    categories: [],

    async getCategories(){
        const { data } = await inventoryDb.get<ICategory[]>('/categories');
        set(() => ({
            categories: data
        }))
    },

    async deleteCategory(id) {
        try {

            const { data } = await inventoryDb.delete(`/categories/${id}`);            
            toast.success(data.message)

        } catch (error) {
            if( isAxiosError( error ) ){

                toast.error('Ocurrio un error',{
                    description: error.response?.data.message
                })
            }
        }

    },

    async createCateogry( name:string ) {
        try {
            const { data } = await inventoryDb.post<{ message: string }>('/categories', { name });
            
            toast.success('Se guardo con exito',{
                description: `${data.message} ${ name }`
            })

        } catch (error) {
            console.log(error)
            if( isAxiosError( error ) ){

                toast.error('Ocurrio un error',{
                    description: error.response?.data.message
                })
            }
        }
    },

    async updateCateogry(id, name) {
        try {
            const { data }= await inventoryDb.put(`/categories/${id}`, { name });
            toast.success(data.message)
        
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


export const useCategoryStore = create<CategoryState & Actions>()(
    storeApi,
);