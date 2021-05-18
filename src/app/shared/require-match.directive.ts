import { Directive, Input } from '@angular/core'
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms'

@Directive({
    selector: '[requireMatch]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: RequireMatchDirective,
        multi: true
    }]
})
export class RequireMatchDirective implements Validator {

    @Input('requireMatch')
    private matchString: string

    public validate(control: AbstractControl): ValidationErrors | null {
        return requireMatchValidator(this.matchString)(control)
    }
}

const requireMatchValidator = (matchString: string): ValidatorFn => {
    Validators.nullValidator
    return (control: AbstractControl): { [key: string]: any } | null => {
        if (!matchString) {
            return null
        }
        console.log('\ncontrol.value:', control.value)
        console.log('matchString:', matchString)
        const stringsMatch: boolean = control.value === matchString
        console.log('stringsMatch:', stringsMatch)
        return !stringsMatch ? { doesNotMatch: { value: control.value } } : null
    }
}
