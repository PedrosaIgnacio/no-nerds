import React, { useEffect, useState } from 'react'
import FinancialAidService from '../../../domain/services/FinancialAid/FinancialAid.service';
import { Ethnicity } from '../../../domain/models/Ethnicity';

const useGetFinancialAid = () => {
    const [data, setData] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const financialAidService = new FinancialAidService();

    const get = async () => {
        setIsLoading(true);
        try {
            const response = await financialAidService.getFinancialAid();
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

export default useGetFinancialAid;