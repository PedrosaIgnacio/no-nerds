import React, { useEffect, useState } from 'react'
import CollegeSearchService from '../../../domain/services/CollegeSearch/CollegeSearch.service';

const useGetAspectsCollegeSearch = () => {
    const [data, setData] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const collegeSearchService= new CollegeSearchService();

    const get = async () => {
        setIsLoading(true);
        try {
            const response = await collegeSearchService.getAspectsCollegeSearch();
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

export default useGetAspectsCollegeSearch;