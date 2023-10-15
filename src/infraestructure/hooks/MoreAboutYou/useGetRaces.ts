import React, { useEffect, useState } from 'react'
import MoreAboutYouService from '../../../domain/services/MoreAboutYou/MoreAboutYou.service';
import { Race } from '../../../domain/models/Race';

const useGetRaces = () => {
    const [data, setData] = useState<Race[]>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const moreAboutYouService = new MoreAboutYouService();

    const get = async () => {
        setIsLoading(true);
        try {
            const response = await moreAboutYouService.getRaces();
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

export default useGetRaces;