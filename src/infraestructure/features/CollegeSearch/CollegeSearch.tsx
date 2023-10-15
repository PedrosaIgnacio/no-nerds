import React from 'react'
import { View, Text } from 'react-native'
import Button from '../../components/Button/Button'
import { getWP } from '../../utils/dimensions'
import { BLACK, WHITE } from '../../constants/CssConstants'
import useController from './CollegeSearchController'
import { styles } from './styles'
import ArrowRight from '../../../../assets/ArrowRight.svg';
import Chip from '../../components/Chip/Chip'

const TITLE = 'What are the most important aspects of your college search?'
const DESCRIPTION = 'Select up to 3';

const CollegeSearch = () => {
    const controller = useController();
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>
                        {TITLE}
                    </Text>
                </View>
                <Text style={styles.description}>
                    {DESCRIPTION}
                </Text>
                <View style={styles.containerChips}>
                    {
                        controller.chipsSelectedAspectsCollegeSearch && Object.keys( controller.chipsSelectedAspectsCollegeSearch).map((value, index) => 
                            <Chip text={controller.chipsSelectedAspectsCollegeSearch[value].label} isSelected={controller.chipsSelectedAspectsCollegeSearch[value].active} setIsSelected={controller.setChipsSelectedAspectsCollegeSearch} key={index} objectKey={value}/>
                        )
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
                    fontSize={16}
                    onPress={controller.handleClickContinue}
                    rightIcon={<ArrowRight />}
                />
            </View>
        </View>
    )
}

export default CollegeSearch