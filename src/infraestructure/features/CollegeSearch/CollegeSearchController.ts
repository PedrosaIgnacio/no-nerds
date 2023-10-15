import { useNavigation } from "@react-navigation/native";
import { useStepperStore } from "../../zustand/Stepper/useStepperStore";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../navigation/types";
import useGetAspectsCollegeSearch from "../../hooks/CollegeSearch/useGetAspectsCollegeSearch";
import { useEffect, useState } from "react";

export default function useController () {

    // Step info from zustand store
    const updateCurrentStep = useStepperStore((state) => state.updateCurrentStep)
    const currentStep = useStepperStore((state) => state.currentStep)
    
    const getAspectsCollegeSearch = useGetAspectsCollegeSearch();

    const navigation = useNavigation<StackNavigationProp<StackParamList>>();

    const [chipsSelectedAspectsCollegeSearch, setChipsSelectedAspectsCollegeSearch] = useState<any>(getAspectsCollegeSearch.data);

    useEffect(() => {
        if(getAspectsCollegeSearch.data){
            setChipsSelectedAspectsCollegeSearch(getAspectsCollegeSearch.data);
        }
    }, [getAspectsCollegeSearch.data])

    const handleClickContinue = () => {
        updateCurrentStep(currentStep + 1);
        navigation.navigate('StudyLocation');
    }

    return{
        handleClickContinue,
        chipsSelectedAspectsCollegeSearch,
        setChipsSelectedAspectsCollegeSearch,
    }
}