import { StyleSheet } from "react-native"
import { getHP, getWP } from "../../utils/dimensions"

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'white',
    },
    content:{
        flex: 1,
        alignItems:"center"
    },
    title:{
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 34,
        fontFamily: 'Prompt-Medium',
        maxWidth: 335,
        textAlign: 'center'
    },
    subtitleContainer:{
        marginVertical: 30,
    },
    subtitle:{
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.374,
        textAlign:'center',
        fontFamily: 'Prompt-Medium'
    },
    description:{
        fontWeight: '400',
        lineHeight: 20,
        fontFamily: 'DMSans-Medium',
        fontSize: 14,
        textAlign:'center',
    },
    buttonContainer:{
        width: getWP(100),
        height: getHP(13),
        display: 'flex',
        alignItems: 'center',
        marginTop: 25,
    }
})