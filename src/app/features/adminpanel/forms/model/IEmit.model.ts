import { _StepNames, StepperFormsTypes } from "./_Steps";

export interface IEmit<T extends StepperFormsTypes>{
    step_name: _StepNames,
    data: T,
    isValid: boolean,
    isMulti?: boolean
}