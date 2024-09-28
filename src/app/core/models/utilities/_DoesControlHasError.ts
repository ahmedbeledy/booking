import { FormGroup } from "@angular/forms";

export interface _DoesControlHasError{
    doesControlHasError(form: FormGroup, controlName: string): boolean
}