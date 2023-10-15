import { StyleSheet } from "react-native"
import { getHP, getWP } from "../../utils/dimensions"
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 34,
        fontFamily: 'Prompt-Medium',
        maxWidth: 335,
        textAlign: 'center',
    },
    containerTitle: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 10,
    },
    map: {
        flex:1
    },
    buttonContainer:{
        width: getWP(100),
        height: getHP(13),
        display: 'flex',
        alignItems: 'center',
        marginTop: 25,
    }
})