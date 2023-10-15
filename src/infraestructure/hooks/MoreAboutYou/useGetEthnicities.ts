import React, { useEffect, useState } from 'react'
import MoreAboutYouService from '../../../domain/services/MoreAboutYou/MoreAboutYou.service';
import { Ethnicity } from '../../../domain/models/Ethnicity';

const useGetEthnicities = () => {
    const [data, setData] = useState<Ethnicity[]>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const moreAboutYouService = new MoreAboutYouService();

    const get = async () => {
        setIsLoading(true);
        try {
            const response = await moreAboutYouService.getEthnicities();
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

export default useGetEthnicities;