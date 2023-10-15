import React from 'react'
import { styles } from './styles';
import { View, Text } from 'react-native'
import Animated from 'react-native-reanimated'
import { PanGestureHandler } from 'react-native-gesture-handler';
import { getWP } from '../../utils/dimensions';
import useController from './FinancialAidController';
import Button from '../../components/Button/Button';
import ArrowRight from '../../../../assets/ArrowRight.svg';

const AREA_TITLE = 'How important is financial aid for your college search?'
const AREA_DESCRIPTION = 'Use the slider to answer'
const BLACK_COLOR = 'black';
const WHITE_COLOR = 'white';

const FinancialAid = () => {
  const controller = useController();
  return (
    <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>
                {AREA_TITLE}
            </Text>
          </View>
          <Text style={styles.description}>
              {AREA_DESCRIPTION}
          </Text>
          <View style={styles.pangestureContainer}>
            <View style={styles.pangestureView}>
              <PanGestureHandler onGestureEvent={controller.panGestureEvent}>
                <Animated.View style={[styles.circle, controller.rStyle]} />
              </PanGestureHandler>
            </View>
            <View style={styles.containerLabels}>
              {
                controller.financialAid && controller.financialAid.map((item: any) => 
                  <Animated.View key={item.id} style={[styles.pangestureOptionText, controller.activeSnapPoint === item.id ? styles.pangestureShadowProp : null]}>
                    <View>
                      <Text style={styles.selectedFontStyle}>{item.name}</Text>
                    </View>
                  </Animated.View>
                )
              }
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
            <Button
                text="Continue"
                height={getWP(14)}
                width={getWP(80)}
                bgColor={BLACK_COLOR}
                color={WHITE_COLOR}
                fontWeight="600"
                fontSize={16}
                onPress={controller.handleClickContinue}
                rightIcon={<ArrowRight/>}
            />
        </View>
    </View>
  )
}

export default FinancialAid