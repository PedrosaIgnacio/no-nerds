import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../navigation/types";
import { useStepperStore } from "../../zustand/Stepper/useStepperStore";
import { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, runOnJS } from "react-native-reanimated";
import { PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import { ContextInterface } from "./types";
import { useEffect, useState } from "react";
import { getHP } from "../../utils/dimensions";
import useGetFinancialAid from "../../hooks/FinancialAid/useGetFinancialAid";

const itemsLength = 5
const OFFSET = getHP(45) / itemsLength 

const snapPoints: any = {
  0: OFFSET * 0,
  1: OFFSET * 1,
  2: OFFSET * 2,
  3: OFFSET * 3,
  4: OFFSET * 4,
}

export default function useController () {

    // Step info from zustand store
    const updateCurrentStep = useStepperStore((state) => state.updateCurrentStep)
    const currentStep = useStepperStore((state) => state.currentStep)
    
    const getFinancialAid = useGetFinancialAid();

    const [activeSnapPoint, setActiveSnapPoint] = useState<number>(1);

    const navigation = useNavigation<StackNavigationProp<StackParamList>>();

    const handleClickContinue = () => {
        updateCurrentStep(currentStep + 1);
        navigation.navigate('AcademicTypes');
    }

    const offset = useSharedValue(0);

    const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextInterface>({
      onStart: (event, context) => {
        context.translateY = offset.value
      },
      onActive: (event, context) => {
        if(offset.value < snapPoints[0] || offset.value > snapPoints[itemsLength - 1]) return;
        offset.value = event.translationY + context.translateY;
      },
      onEnd: () => {
        for (let i = 0; i < itemsLength; i++) {
          if(i === 0 && offset.value < snapPoints[0]){
            offset.value = withSpring(i * OFFSET);
            runOnJS(setActiveSnapPoint)(i + 1)
            break;
          }
          if(i === itemsLength - 1){
            if(offset.value >= snapPoints[i]){
              offset.value = withSpring(i * OFFSET);
              runOnJS(setActiveSnapPoint)(i + 1)
              break;
            }
          }
          if (offset.value >= snapPoints[i] && offset.value < snapPoints[i + 1]) {
            offset.value = withSpring(i * OFFSET);
            runOnJS(setActiveSnapPoint)(i + 1)
            break; // Break the loop once snapped
          }
        }
      }
    });
  
    const rStyle = useAnimatedStyle(() => {
      return{
        transform:[
          {
            translateY: offset.value,
          }
        ]
      }
    })

    return {
        handleClickContinue,
        rStyle,
        panGestureEvent,
        financialAid: getFinancialAid.data,
        activeSnapPoint,
    }
}