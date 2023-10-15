import { ButtonProps } from "./types";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button(buttonProps: ButtonProps) {
    
    const styles = StyleSheet.create({
        btn:{
            height: buttonProps.height,
            width: buttonProps.width,
            backgroundColor: buttonProps.bgColor,
            borderRadius: 16,
            paddingHorizontal: 24,
            paddingVertical: 16,
            flexDirection:'row'
        },
        text:{
            fontSize: buttonProps.fontSize,
            color: buttonProps.color,
            fontWeight: buttonProps.fontWeight,
            letterSpacing: 0.374,
            fontFamily: 'Prompt-Medium',
            flex: 1
        }
    })

    return (
        <TouchableOpacity style={styles.btn} onPress={buttonProps.onPress}>
            <Text style={styles.text}>
                {buttonProps.text}
            </Text>
            {buttonProps.rightIcon}
        </TouchableOpacity>
    )
}