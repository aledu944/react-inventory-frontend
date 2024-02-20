import { StateCreator, create } from 'zustand';

interface SaleState {

}


interface Actions {

}

const storeApi: StateCreator<SaleState & Actions> = (set, get) => ({

})


export const useSaleStore = create<SaleState & Actions>()(
    storeApi
);