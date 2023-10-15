import { useNavigation } from "@react-navigation/native";
import { useStepperStore } from "../../zustand/Stepper/useStepperStore";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../navigation/types";
import useGetRaces from "../../hooks/MoreAboutYou/useGetRaces";
import useGetEthnicities from "../../hooks/MoreAboutYou/useGetEthnicities";
import useGetGenders from "../../hooks/MoreAboutYou/useGetGenders";
import { useEffect, useState } from "react";
import { Ethnicity } from "../../../domain/models/Ethnicity";
import { Gender } from "../../../domain/models/Gender";
import { Race } from "../../../domain/models/Race";

export default function useController () {

    // Step info from zustand store
    const updateCurrentStep = useStepperStore((state) => state.updateCurrentStep)
    const currentStep = useStepperStore((state) => state.currentStep)

    const [races, setRaces] = useState<{value: number, label: string}[]>();
    const [genders, setGenders] = useState<{value: number, label: string}[]>();
    const [ethnicities, setEthnicities] = useState<{value: number, label: string}[]>();
        
    // State to manage selected values
    const [selectedValues, setSelectedValues] = useState({
        selectedEthnicity: null,
        selectedGender: null,
        selectedRace: null,
    });

    const navigation = useNavigation<StackNavigationProp<StackParamList>>();

    // Hooks to fetch fake data
    const getRaces = useGetRaces();
    const getEthnicities = useGetEthnicities();
    const getGenders = useGetGenders();


    const adaptRaces = (races: Race[]): {value: number, label: string}[] => {
        const result = races.map((item) => {
            return{
                value: item.id,
                label: item.name,
            }
        })
        return result;
    }
    const adaptEthnicities = (races: Ethnicity[]): {value: number, label: string}[] => {
        const result = races.map((item) => {
            return{
                value: item.id,
                label: item.name,
            }
        })
        return result;
    }
    const adaptGenders = (races: Gender[]): {value: number, label: string}[] => {
        const result = races.map((item) => {
            return{
                value: item.id,
                label: item.name,
            }
        })
        return result;
    }

    useEffect(() => {
        if(getRaces.data){
            const adaptedRaces = adaptRaces(getRaces.data)
            setRaces(adaptedRaces);
        }
    }, [getRaces.data])

    useEffect(() => {
        if(getEthnicities.data){
            const adaptedEthnicities = adaptEthnicities(getEthnicities.data)
            setEthnicities(adaptedEthnicities);
        }
    }, [getEthnicities.data])

    useEffect(() => {
        if(getGenders.data){
            const adaptedGenders = adaptGenders(getGenders.data)
            setGenders(adaptedGenders);
        }
    }, [getGenders.data])

    const handleClickContinue = () => {
        updateCurrentStep(currentStep + 1);
        navigation.navigate('CollegeSearch');
    }

    return {
        handleClickContinue,
        races,
        ethnicities,
        genders,
        setSelectedValues,
        selectedValues,
    }
}