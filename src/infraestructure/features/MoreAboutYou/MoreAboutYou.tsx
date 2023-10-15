import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import useController from './MoreAboutYouController';
import Button from '../../components/Button/Button';
import { getWP } from '../../utils/dimensions';
import { BLACK, WHITE } from '../../constants/CssConstants';
import ArrowRight from '../../../../assets/ArrowRight.svg';
import Dropdown from 'react-native-input-select';

const TITLE = "Let's learn a bit more about you";

const MoreAboutYou = () => {
  const controller = useController();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.containerTitle}>
            <Text style={styles.title}>
              {TITLE}
            </Text>
        </View>

        <View style={styles.dropdownsContainer}>
          {
            controller.genders && 
            <Dropdown
              placeholder="Select your gender"
              options={controller.genders}
              label="What's your gender?"
              selectedValue={controller.selectedValues.selectedGender}
              onValueChange={(value: any) => {
                controller.setSelectedValues(currentState => ({...currentState, selectedGender: value}))
              }}
              checkboxComponentStyles={{
                checkboxStyle: {
                  backgroundColor: 'purple',
                  borderRadius: 30,
                  padding: 10,
                  borderColor: 'red',
                  display:'none'
                }}
              }
              dropdownStyle={{
                borderWidth: 0
              }}
              listComponentStyles={{
                itemSeparatorStyle: {
                  opacity: 0,
                  borderColor: 'white',
                  borderWidth: 2,
                  backgroundColor: 'cyan',
                },
                sectionHeaderStyle: {
                  padding: 10,
                  backgroundColor: 'cyan',
                },
              }}
            />
          }
          {
            controller.races && 
            <Dropdown
              placeholder="Select your race"
              options={controller.races}
              label="What's your race?"
              selectedValue={controller.selectedValues.selectedRace}
              onValueChange={(value: any) => {
                controller.setSelectedValues(currentState => ({...currentState, selectedRace: value}))
              }}
              checkboxComponentStyles={{
                checkboxStyle: {
                  backgroundColor: 'purple',
                  borderRadius: 30,
                  padding: 10,
                  borderColor: 'red',
                  display:'none'
                }}
              }
              dropdownStyle={{
                borderWidth: 0
              }}
              listComponentStyles={{
                itemSeparatorStyle: {
                  opacity: 0,
                  borderColor: 'white',
                  borderWidth: 2,
                  backgroundColor: 'cyan',
                },
                sectionHeaderStyle: {
                  padding: 10,
                  backgroundColor: 'cyan',
                },
              }}
            />
          }
          {
            controller.ethnicities && 
            <Dropdown
              placeholder="Select your ethnicity"
              options={controller.ethnicities}
              label="What's your ethnicity?"
              selectedValue={controller.selectedValues.selectedEthnicity}
              onValueChange={(value: any) => {
                controller.setSelectedValues(currentState => ({...currentState, selectedEthnicity: value}))
              }}
              checkboxComponentStyles={{
                checkboxStyle: {
                  backgroundColor: 'purple',
                  borderRadius: 30,
                  padding: 10,
                  borderColor: 'red',
                  display:'none'
                }}
              }
              dropdownStyle={{
                borderWidth: 0
              }}
              listComponentStyles={{
                itemSeparatorStyle: {
                  opacity: 0,
                  borderColor: 'white',
                  borderWidth: 2,
                  backgroundColor: 'cyan',
                },
                sectionHeaderStyle: {
                  padding: 10,
                  backgroundColor: 'cyan',
                },
              }}
            />
          }
        </View>
      </View>

      <View style={styles.buttonContainer}>
          <Button
              text="Continue"
              height={getWP(14)}
              width={getWP(80)}
              bgColor={BLACK}
              color={WHITE}
              fontWeight="600"
              fontSize={16}
              onPress={controller.handleClickContinue}
              rightIcon={<ArrowRight />}
          />
      </View>
    </View>
  )
}

export default MoreAboutYou