import { StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 56,
        display: 'flex',
        borderWidth: 1,
        borderColor: '#3E414A',
        gap: 5,
        alignItems: 'center',
        flexDirection:'row',

    },
    chipText:{
        fontSize: 14,
        fontFamily: 'DMSans-Bold',
        lineHeight: 24,
        color: '#3E414A',
    },
    gradient:{
        flexDirection:'row',
        borderRadius: 56,
        margin: 5,
    },
})