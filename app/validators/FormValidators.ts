/**
 * Created by pratik on 26/2/16.
 */
import { FORM_DIRECTIVES ,  FormBuilder,   ControlGroup , Validators , AbstractControl , Control} from 'angular2/common';
/**
 * Class with all custom validators
 */
export class CustomValidators{
    static password : string;
    /**
     * returns true if password contains 6 Characters with one upper,lower,numeric and special character
     * @param control
     * @returns {{invalidPassword: boolean}}
     */
    static passwordFormatValidator(control: Control): { [key: string]: boolean } {
        if(!control.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/)){
            return {invalidPassword: true}
        }
    }

    static phoneNumberFormatValidator(control : Control) : { [key: string]: boolean}{
        if(!control.value.match()){
            return {invalidNumber : true}
        }
    }

    /**
     * Email id format validation
     * @param control
     * @returns {{invalidEmail: boolean}}
     */
    static emailFormatValidator(control: Control): {[key: string]: boolean}{
        if(!control.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            return {invalidEmail: true}
        }
    }

    /**
     * For inputs that should not contain numbers
     * @param control
     */
    static excludeNumericValidator(control: Control): {[key: string]: boolean}{
        if(!control.value.match(/^([^0-9]*)$/)){
            return {invalidString: true}
        }
    }

}

