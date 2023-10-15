export type StepperStore = {
    currentStep: number;
    updateCurrentStep: (step: number) => void;
}