import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles';
import MapView, { Geojson } from 'react-native-maps';
import { USAGeoJson }from '../../utils/USA'
import Button from '../../components/Button/Button';
import { getWP } from '../../utils/dimensions';
import { BLACK, WHITE } from '../../constants/CssConstants';
import ArrowRight from '../../../../assets/ArrowRight.svg'

const TITLE = 'Where do you want to study';

const StudyLocation = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>
                        {TITLE}
                    </Text>
                </View>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.0902, // Centered on the US
                        longitude: -95.7129,
                        latitudeDelta: 30, // Adjust as needed
                        longitudeDelta: 30, // Adjust as needed
                    }}
                 >
                        <Geojson
                            geojson={USAGeoJson}
                            strokeColor="gray"
                            fillColor="green"
                            strokeWidth={2}
                        />
                 </MapView>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    text="Continue"
                    height={getWP(14)}
                    width={getWP(80)}
                    bgColor={BLACK}
                    color={WHITE}
                    fontSize={16}
                    // onPress={controller.handleClickContinue}
                    rightIcon={<ArrowRight/>}
                />
            </View>
        </View>
    )
}

export default StudyLocation