import { View, Text, ScrollView } from "react-native";
import Button from "../../components/Button/Button";
import { getWP } from "../../utils/dimensions";
import ButtonCheck from "../../components/ButtonCheck/ButtonCheck";
import { styles } from "./styles"
import useController from "./SchoolSettingController";
import ArrowRight from '../../../../assets/ArrowRight.svg';
import { INITIAL_VALUES_SCHOOL_SIZE, INITIAL_VALUES_TYPE_OF_AREA } from "./types";
import { BLACK, WHITE } from "../../constants/CssConstants";

const AREA_TITLE = 'What school setting do you prefer?'
const AREA_SUBTITLE = 'Type of area:'
const AREA_DESCRIPTION = 'Select all the apply'
const SCHOOL_SIZE_SUBTITLE = 'School size:'

function SchoolSetting(){
    const controller = useController();
    return(
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>
                    {AREA_TITLE}
                </Text>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>
                        {AREA_SUBTITLE}
                    </Text>
                    <Text style={styles.description}>
                        {AREA_DESCRIPTION}
                    </Text>
                </View>

                {
                    controller.typeOfAreacheckboxChecked && Object.keys(controller.typeOfAreacheckboxChecked).map((value: string, index: number) =>
                        <ButtonCheck
                            key={index} 
                            text={controller.typeOfAreacheckboxChecked[value]?.label}
                            isChecked={controller.typeOfAreacheckboxChecked[value]?.active}
                            setIsChecked={controller.setTypeOfAreacheckboxChecked}
                            objectKey={value}
                            initialValues={INITIAL_VALUES_TYPE_OF_AREA}
                        />
                    )
                }

                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>
                        {SCHOOL_SIZE_SUBTITLE}
                    </Text>
                </View>
                {
                    controller.schoolSizecheckboxChecked && Object.keys(controller.schoolSizecheckboxChecked).map((value: string, index: number) =>
                        <ButtonCheck 
                            key={index} 
                            text={controller.schoolSizecheckboxChecked[value]?.label}
                            isChecked={controller.schoolSizecheckboxChecked[value]?.active}
                            setIsChecked={controller.setSchoolSizecheckboxChecked}
                            objectKey={value}
                            initialValues={INITIAL_VALUES_SCHOOL_SIZE}
                        />
                    )
                }
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
                    rightIcon={<ArrowRight/>}
                />
            </View>
        </ScrollView>
    )
}

export default SchoolSetting;

