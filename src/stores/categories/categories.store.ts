import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";

import inventoryDb from "../../api/inventoryDb";
import { ICategory } from "../../interfaces";

interface CategoryState {
    categories: ICategory[];
}

interface Actions {
    getCategories: () => void;
}

const storeApi: StateCreator<CategoryState & Actions> = (set) => ({
    categories: [],

    getCategories: async () => {
        const { data } = await inventoryDb.get<ICategory[]>('/categories');
        set(() => ({ 
            categories: data
        }))
    }

})


export const useCategoryStore = create<CategoryState & Actions>()(
    persist(
        storeApi,
        { name: "categories-storage"}
    )

);