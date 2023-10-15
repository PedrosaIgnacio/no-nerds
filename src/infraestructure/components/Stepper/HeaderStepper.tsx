import { StyleSheet, View } from 'react-native';
import { getHP } from '../../utils/dimensions';
import ChevronLeft from '../../../../assets/chevron-left.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StepperIndicator from './StepperIndicator';
import { useStepperStore } from '../../zustand/Stepper/useStepperStore';
import { useNavigation } from '@react-navigation/native';

const GRAY_COLOR = '#919399'
const FIRST_STEP = 1;

export default function HeaderStepper () {
    const currentStep = useStepperStore((state) => state.currentStep);
    const updateCurrentStep = useStepperStore((state) => state.updateCurrentStep);
    const navigation = useNavigation();

    const handlePressToBack = () => {
        updateCurrentStep(currentStep - 1);
        navigation.goBack();
    }

    return(
        <>
            <View style={styles.container}>
                {
                    currentStep !== FIRST_STEP &&
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.backButton} onPress={handlePressToBack}>
                            <ChevronLeft style={styles.chevron} width={24} height={24} color={GRAY_COLOR} />
                        </TouchableOpacity>
                    </View>
                }
                <StepperIndicator active={currentStep} numberOfSteps={6} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        height: getHP(10),
        padding: 10,
        display:'flex',
        justifyContent:'flex-end',
        backgroundColor:'white'
    },
    row:{
        flex: 1,
        justifyContent:'center',
    },
    backButton:{
        padding: 10,
        borderRadius: 100,
    },
    chevron:{
        alignContent:'center'
    },
    stepCircle:{
        width: 8,
        height: 8,
        // backgroundColor:'#5A6071',
        borderRadius: 100,
    }
 
})