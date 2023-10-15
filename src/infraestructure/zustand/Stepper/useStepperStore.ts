import { create } from "zustand";
import { StepperStore } from "./types";

export const useStepperStore = create<StepperStore>(
    (set) => ({
        currentStep: 1,
        updateCurrentStep: (step: number) => set(() => ({ currentStep: step }))
    })
)