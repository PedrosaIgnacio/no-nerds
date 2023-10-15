import React, { useEffect, useState } from 'react'
import SchoolSettingsService from '../../../domain/services/SchoolSettings/ShoolSettings.service';

const useGetSchoolSize = () => {
    const [data, setData] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const schoolSettingsService = new SchoolSettingsService();

    const get = async () => {
        setIsLoading(true);
        try {
            const response = await schoolSettingsService.getSchoolSize();
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

export default useGetSchoolSize