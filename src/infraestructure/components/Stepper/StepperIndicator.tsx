import { View, StyleSheet } from "react-native";
import { StepperIndicatorProps } from "./types";
import { getHP } from "../../utils/dimensions";

const ACTIVE_COLOR = '#5A6071'
const DEFAULT_COLOR = '#E9EDF7'

export default function StepperIndicator(stepperIndicatorProps: StepperIndicatorProps) {
    const { active, numberOfSteps } = stepperIndicatorProps
    return(
        <View style={styles.container}>
        {
            Array(numberOfSteps).fill('').map((_, ind) => 
                <View key={ind} style={{ backgroundColor: active === ind + 1 ? ACTIVE_COLOR : DEFAULT_COLOR, ...styles.stepCircle}} />
            )
        }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: getHP(5),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'flex-end',
        padding: 5,
    },
    stepCircle:{
        width: 8,
        height: 8,
        marginHorizontal: 10,
        borderRadius: 100,
    }
})