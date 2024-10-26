import { _StepNames } from "./_Steps";

export type IStepsValidation = {
    [key in _StepNames]: boolean;
};