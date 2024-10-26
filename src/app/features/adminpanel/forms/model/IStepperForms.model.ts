import { _StepNames, StepperFormsTypes } from "./_Steps";

export type IStepperForms = {
    [key in _StepNames]: StepperFormsTypes;
};