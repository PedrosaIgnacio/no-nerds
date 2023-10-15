import { View, Text } from "react-native";
import { styles } from './styles'
import { ChipProps } from "./types";
import { TouchableOpacity } from "react-native-gesture-handler";
import InformationCircle from "../../../../assets/information-circle.svg";
import { LinearGradient } from "expo-linear-gradient";

export default function Chip(chipProps: ChipProps) {

    const { text, isSelected, setIsSelected, objectKey } = chipProps;

    const handlePress = () => {
        setIsSelected((prevState: any) => {
            return{
              ...prevState,
              [objectKey]: {
                active: !prevState[objectKey]?.active,
                label: prevState[objectKey]?.label,
              }
            }
        });
    }
    return (
        <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
            colors={isSelected ? ['#BEE4FF', '#FEB58C'] : ['#FFF', '#FFF']}
        >
            <TouchableOpacity style={styles.container} onPress={handlePress}>
                <Text style={styles.chipText}>
                    {text}
                </Text>
                <InformationCircle />
            </TouchableOpacity>
        </LinearGradient>
    )
}