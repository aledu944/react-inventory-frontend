import { StateCreator, create } from "zustand";
import { toast } from "sonner";
import { isAxiosError } from "axios";


import inventoryDb from "../../api/inventoryDb";
import { ILoginRespose, IUser } from '../../interfaces';
import { persist } from "zustand/middleware";


interface AuthState {
    user: undefined | IUser,
    token: undefined | string,
    authStatus: 'pending' | 'authenticated' | 'not-authenticated',

    logout: () => Promise<void>
    checkAuthStatus: () => Promise<void>
    login: (email: string, password: string) => Promise<void>
}


interface Actions {

}


const storeApi: StateCreator<AuthState & Actions> = (set, get) => ({
    user: undefined,
    token: undefined,
    authStatus: 'pending',

    login: async (email: string, password: string) => {

        try {
            const { data } = await inventoryDb.post<ILoginRespose>('/auth/login', { email, password });

            console.log(data);
            set( () => ({ user: data.user!, token: data.token, authStatus: 'authenticated' }));
            toast.success('Sesion iniciada',{
                description: 'Bienvenido ' + data.user.name
            })

        } catch (error) {
            set( () => ({ authStatus: 'not-authenticated' }));
            console.log(error)
            if( isAxiosError( error ) ){

                toast.error('Ocurrio un error',{
                    description: error.response?.data.message
                })
            }
        }
    },

    logout: async () => {
        const token = get().token;

        try {
            await inventoryDb.get('/auth/logout', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });

            set( () => ({ 
                user: undefined, 
                token: undefined,
                authStatus: 'not-authenticated' 
            }));

            toast.success('Sesion cerrada')

            
        } catch (error) {
            set( () => ({ 
                user: undefined, 
                token: undefined,
                authStatus: 'not-authenticated' 
            }));
            
        }
    },

    checkAuthStatus: async () => {
        const token = get().token;

        if( !token ){
            set( () => ({ authStatus: 'not-authenticated' }));
            console.log('No access token')
            return;
        }

        try {
            const { data } = await inventoryDb.get<IUser>('/auth/user', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });

            set( () => ({ user: data!, token, authStatus: 'authenticated' }));

            
        } catch (error) {
            set( () => ({ 
                user: undefined, 
                token: undefined,
                authStatus: 'not-authenticated' 
            }));
            
        }
    }


});


export const useAuthStore = create<AuthState & Actions>()(
    persist(
        storeApi,
        {name: 'auth-storage'}
    )
);