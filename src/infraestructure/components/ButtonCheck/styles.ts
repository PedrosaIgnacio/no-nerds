import { getWP } from "../../utils/dimensions";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    gradient:{
      borderRadius: 16,
      marginVertical: 5,
    },
    container:{
      flexDirection:'row',
      alignItems:'center',
      borderWidth: 1,
      borderRadius: 16,
      padding: 10,
      width: getWP(80),
      borderColor: '#232323',
    },
    checked:{

    },
    checkbox:{
      margin: 0,
      borderRadius: 4,
      padding: 8,
      marginHorizontal: 10,
      borderColor:'black'
    },
    checkboxText:{
      fontFamily:'DMSans-Regular',
      lineHeight: 26,
      fontSize: 16,
    }
  })