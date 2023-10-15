import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { getWP } from '../../utils/dimensions';
import Button from '../../components/Button/Button';
import { BLACK, WHITE } from '../../constants/CssConstants';
import ArrowRight from '../../../../assets/ArrowRight.svg';
import useController from './AcademicTypesController';
import Chip from '../../components/Chip/Chip';

const TITLE = 'What types of academics interest you?';
const DESCRIPTION = 'Choose up to 4';

const AcademicTypes = () => {
    const controller = useController();
    // const [chipValue, setChipValue] = useState(false);
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
                        controller.chipSelectedAcademicTypes && Object.keys( controller.chipSelectedAcademicTypes).map((value, index) => 
                            <Chip text={controller.chipSelectedAcademicTypes[value].label} isSelected={controller.chipSelectedAcademicTypes[value].active} setIsSelected={controller.setChipSelectedAcademicTypes} key={index} objectKey={value}/>
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

export default AcademicTypes