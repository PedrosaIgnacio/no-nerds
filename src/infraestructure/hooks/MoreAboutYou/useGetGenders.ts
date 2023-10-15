import React, { useEffect, useState } from 'react'
import MoreAboutYouService from '../../../domain/services/MoreAboutYou/MoreAboutYou.service';

const useGetGenders = () => {
    const [data, setData] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const moreAboutYouService = new MoreAboutYouService();

    const get = async () => {
        setIsLoading(true);
        try {
            const response = await moreAboutYouService.getGenders();
            setData(response);
        } catch (error) {
            setError(error);
        }
        finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
        get();
    }, [])
    
    return {
        data,
        isLoading,
        error
    }
}

export default useGetGenders;