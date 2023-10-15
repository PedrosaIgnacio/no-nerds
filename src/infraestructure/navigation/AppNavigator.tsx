import { createStackNavigator } from '@react-navigation/stack';
import { StackParamList } from './types';
import { SafeAreaView, StyleSheet } from 'react-native';
import HeaderStepper from '../components/Stepper/HeaderStepper';
import SchoolSetting from '../features/SchoolSetting/SchoolSetting';
import FinancialAid from '../features/FinancialAid/FinancialAid';
import AcademicTypes from '../features/AcademicsTypes/AcademicTypes';
import MoreAboutYou from '../features/MoreAboutYou/MoreAboutYou';
import CollegeSearch from '../features/CollegeSearch/CollegeSearch';
import StudyLocation from '../features/StudyLocation/StudyLocation';

const Stack = createStackNavigator<StackParamList>();

function AppNavigator (){
    return(
        <SafeAreaView style={styles.safeArea}>
            <Stack.Navigator screenOptions={{
                gestureEnabled: false,
            }}>
                <Stack.Screen 
                    name="SchoolSetting" 
                    component={SchoolSetting} 
                    options={{
                        header: () => <HeaderStepper />
                    }} 
                />
                <Stack.Screen 
                    name="FinancialAid" 
                    component={FinancialAid} 
                    options={{
                        header: () => <HeaderStepper />
                    }} 
                />
                <Stack.Screen 
                    name="AcademicTypes" 
                    component={AcademicTypes} 
                    options={{
                        header: () => <HeaderStepper />
                    }} 
                />
                <Stack.Screen 
                    name="MoreAboutYou" 
                    component={MoreAboutYou} 
                    options={{
                        header: () => <HeaderStepper />
                    }} 
                />
                <Stack.Screen 
                    name="CollegeSearch" 
                    component={CollegeSearch} 
                    options={{
                        header: () => <HeaderStepper />
                    }} 
                />
                <Stack.Screen 
                    name="StudyLocation" 
                    component={StudyLocation} 
                    options={{
                        header: () => <HeaderStepper />
                    }} 
                />
            </Stack.Navigator>
        </SafeAreaView>
    )
}

export default AppNavigator;

const styles = StyleSheet.create({
    safeArea:{
        flex: 1,
    }
})