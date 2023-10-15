import { StyleSheet } from "react-native"
import { getHP, getWP } from "../../utils/dimensions"
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'white',
    },
    content:{
        flex: 1,
    },
    title:{
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 34,
        fontFamily: 'Prompt-Medium',
        maxWidth: 335,
        textAlign: 'center',
    },
    containerTitle:{
        display:'flex',
        alignItems:'center',
        marginBottom: 10,
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
    },
    containerChips:{
        flexDirection: 'row',
        padding: 20,
        flexWrap:'wrap',
    }
})