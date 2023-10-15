import { useNavigation } from "@react-navigation/native";
import { useStepperStore } from "../../zustand/Stepper/useStepperStore";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../navigation/types";
import { useEffect, useState } from "react";
import useGetAcademicTypes from "../../hooks/AcademicTypes/useGetAcademicTypes";

export default function useController () {

    // Step info from zustand store
    const updateCurrentStep = useStepperStore((state) => state.updateCurrentStep)
    const currentStep = useStepperStore((state) => state.currentStep)

    const getAcademicTypes = useGetAcademicTypes();

    const navigation = useNavigation<StackNavigationProp<StackParamList>>();

    const [chipSelectedAcademicTypes, setChipSelectedAcademicTypes] = useState<any>(getAcademicTypes.data);

    useEffect(() => {
        if(getAcademicTypes.data){
            setChipSelectedAcademicTypes(getAcademicTypes.data);
        }
    }, [getAcademicTypes.data])
    
    const handleClickContinue = () => {
        updateCurrentStep(currentStep + 1);
        navigation.navigate('MoreAboutYou');
    }

    return {
        handleClickContinue,
        chipSelectedAcademicTypes,
        setChipSelectedAcademicTypes,
    }
}