import { FormGroup } from "@angular/forms";

export interface _MatchPassword{
    matchPassword(form: FormGroup): boolean
}