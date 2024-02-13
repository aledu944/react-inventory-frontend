import { useEffect, useState } from 'react';

import { isAxiosError } from 'axios';
import inventoryDb from '../api/inventoryDb';


interface UseFetch<T>{
    isLoading: boolean;
    data: undefined | T;
    error: undefined | string;
}

export const useFetch = <T>(url: string): UseFetch<T> => {

    const [data, setData] = useState<T>();
    const [error, setError] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false);


    const fetchData = async () => {

        setIsLoading(true);

        try {
        
            const response = await inventoryDb.get(url);
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            if( isAxiosError(error) ){
                setError(error.response?.data.message);
            }
            
        }
    }


    useEffect(() => {
        fetchData();
    }, [])
    
    return {
        data,
        error,
        isLoading
    }

}
