import React from 'react'
import { SelectProps } from './types'
import { Picker } from '@react-native-picker/picker'

const Select = (selectProps: SelectProps) => {
  return (
    <Picker mode='dropdown'>
        {
            selectProps.options.map((item, index) => 
                <Picker.Item key={index} label={item.label} value={item.value} />
            )
        }
    </Picker>
  )
}

export default Select;