import React, { useEffect, useState } from 'react'
import AcademicTypesService from '../../../domain/services/AcademicTypes/AcademicTypes.service';

const useGetAcademicTypes = () => {
    const [data, setData] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const academicTypesService = new AcademicTypesService();

    const get = async () => {
        setIsLoading(true);
        try {
            const response = await academicTypesService.getAcademicTypes();
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

export default useGetAcademicTypes;