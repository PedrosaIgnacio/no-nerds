import React from 'react'
import Checkbox from 'expo-checkbox';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ButtonCheckProps } from './types';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';

function ButtonCheck(buttonCheckProps: ButtonCheckProps) {
  const { text, isChecked, setIsChecked, objectKey, initialValues } = buttonCheckProps;

  const handleCheckboxButtonPress = () => {
      setIsChecked((prevState: any) => {
        if(prevState[objectKey].cleanAll){
          return{
            ...initialValues,
            [objectKey]: {
              active: !prevState[objectKey]?.active,
              label: prevState[objectKey]?.label,
              cleanAll: true,
            }
          }
        }
        // To do: When i check in another checkbox,
        // the state of 'I'm not sure' CheckboxButton must be disabled
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
      colors={isChecked ? ['#BEE4FF', '#FEB58C']: ['#FFF', '#FFF']}
    >
      <TouchableOpacity style={styles.container} onPress={handleCheckboxButtonPress}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? '#232323' : undefined}
          />
          <Text style={styles.checkboxText}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default ButtonCheck
