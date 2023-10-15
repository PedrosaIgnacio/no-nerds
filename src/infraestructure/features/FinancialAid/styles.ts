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
    containerTitle:{
        display:'flex',
        alignItems:'center',
        marginBottom: 10,
    },
    title:{
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 34,
        fontFamily: 'Prompt-Medium',
        maxWidth: 335,
        textAlign: 'center',
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
    },
    circle:{
        height: getHP(9),
        width: getHP(9),
        backgroundColor: '#3E414A',
        borderRadius: 100,
    },
    pangestureContainer:{
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    pangestureView: {
        borderRadius: 56,
        backgroundColor: '#F1F6FF',
        height: getHP(45),
        width: getHP(9),
    },
    containerLabels:{
        height: getHP(45),
        maxWidth: 300,
        paddingHorizontal: 25,
        overflow:'hidden',
        justifyContent:'space-between',
    },
    pangestureOptionText:{
        marginVertical: 5,
        paddingHorizontal: 16,
        borderRadius: 8,
        height: getHP(7),
        justifyContent:'center',
        backgroundColor:'white',
    },
    pangestureShadowProp:{
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
    },
    selectedFontStyle:{
        fontFamily: 'DMSans-Medium', 
        fontSize: 14, 
        lineHeight: 24,
    }
})