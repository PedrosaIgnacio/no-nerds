import { useNavigation } from "@react-navigation/native"
import { StackParamList } from "../../navigation/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { useStepperStore } from "../../zustand/Stepper/useStepperStore";
import { useEffect, useState } from "react";
import useGetTypeOfArea from "../../hooks/SchoolSettings/useGetTypeOfArea";
import useGetSchoolSize from "../../hooks/SchoolSettings/useGetSchoolSize";

export default function useController() {

    // Step info from zustand store
    const updateCurrentStep = useStepperStore((state) => state.updateCurrentStep)
    const currentStep = useStepperStore((state) => state.currentStep)

    const getTypeOfArea = useGetTypeOfArea();
    const getSchoolSize = useGetSchoolSize();

    const navigation = useNavigation<StackNavigationProp<StackParamList>>();

    // State to manage CheckboxButtons
    const [typeOfAreacheckboxChecked, setTypeOfAreacheckboxChecked] = useState<any>(getTypeOfArea.data);
    const [schoolSizecheckboxChecked, setSchoolSizecheckboxChecked] = useState<any>(getSchoolSize.data);

    useEffect(() => {
        if(getTypeOfArea.data){
            setTypeOfAreacheckboxChecked(getTypeOfArea.data);
        }
    }, [getTypeOfArea.data])

    useEffect(() => {
        if(getSchoolSize.data){
            setSchoolSizecheckboxChecked(getSchoolSize.data);
        }
    }, [getSchoolSize.data])
    
    const handleClickContinue = () => {
        updateCurrentStep(currentStep + 1);
        navigation.navigate('FinancialAid');
    }

    return{
        handleClickContinue,
        typeOfAreacheckboxChecked,
        setTypeOfAreacheckboxChecked,
        schoolSizecheckboxChecked,
        setSchoolSizecheckboxChecked,
    }
}