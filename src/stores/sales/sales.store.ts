import { StateCreator, create } from 'zustand';
import inventoryDb from '../../api/inventoryDb';
import { isAxiosError } from 'axios';
import { toast } from 'sonner';
import { ICartProduct } from '../../interfaces';

interface SaleState {

}


interface Actions {
    createNewSale: (client: string, cart: ICartProduct[], total: number) => Promise<void>
}

const storeApi: StateCreator<SaleState & Actions> = (set, get) => ({

    createNewSale: async ( client: string, cart: ICartProduct[], total: number ) => {

        const products = cart.map(item => {
            return {
                id: item.id,
                quantity: item.quantity
            }
        })

        const sale = {
            client,
            products,
            total
        }

        try {

            const { data } = await inventoryDb.post('/sales', sale);
            console.log(data)
            toast.success(data.meessage);

            
        } catch (error) {
            console.log(error);
            
            if( isAxiosError(error) ){
                toast.error(error.response?.data.message);
            }
        }

    }

})


export const useSaleStore = create<SaleState & Actions>()(
    storeApi
);