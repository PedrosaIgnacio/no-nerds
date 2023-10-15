import { Dispatch, SetStateAction } from "react";

export interface ChipProps{
    text: string;
    isSelected: boolean;
    setIsSelected: Dispatch<SetStateAction<boolean>>;
    objectKey: string;
}