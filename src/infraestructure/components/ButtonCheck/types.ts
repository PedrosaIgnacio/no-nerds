import { Dispatch, SetStateAction } from "react";
import { SetState } from "zustand";

export interface ButtonCheckProps{
    text: string;
    isChecked: boolean;
    setIsChecked: Dispatch<SetStateAction<any>>;
    objectKey: string;
    initialValues: any;
}