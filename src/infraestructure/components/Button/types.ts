import { DimensionValue } from "react-native";

export interface ButtonProps{
    color: string;
    fontSize?: number;
    text: string;
    rightIcon?: JSX.Element;
    leftIcon?: JSX.Element;
    onPress?: () => void;
    width: DimensionValue;
    height: DimensionValue;
    bgColor: string;
    fontWeight?:     
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}