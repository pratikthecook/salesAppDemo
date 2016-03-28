/**
 * Created by pratik on 23/3/16.
 */
import {Component , ViewEncapsulation , OnInit} from 'angular2/core';
import {Router,RouteConfig, ROUTER_DIRECTIVES, RouterLink , AsyncRoute}  from 'angular2/router';
import { FORM_DIRECTIVES ,  FormBuilder,   ControlGroup , Validators , AbstractControl , Control} from 'angular2/common';
import {CustomValidators} from "../validators/FormValidators";
import {LoginService}     from './login.service';
import { Http, HTTP_PROVIDERS,Response} from 'angular2/http';

@Component({
    selector: 'login',
    templateUrl : './app/Login/login.html',
    directives : [ROUTER_DIRECTIVES,FORM_DIRECTIVES],
    providers : [LoginService,HTTP_PROVIDERS],
    encapsulation : ViewEncapsulation.NONE
})

export class Login implements OnInit{

    loginFailedMessage : string;
    stopLoading : boolean;
    accountForm : ControlGroup;

    username : AbstractControl;
    password : AbstractControl;

    constructor(public _router : Router,private _formbuilder: FormBuilder, private loginService : LoginService){}

    ngOnInit() {
        componentHandler.upgradeAllRegistered();
        this.stopLoading = true;

         // TODO : Validations using angular ?? failed on  BETA 9 ..changes??
       /* this.accountForm = this._formbuilder.group({
            'username': ['Username',Validators.compose([Validators.required])],
            'password' : ['Admin@2015',Validators.compose([Validators.required])]
        });*/
        //this.username = this.accountForm.controls['username'];
        //this.password = this.accountForm.controls['password'];


        // TODO :  On refresh check if user is logged in??
    }

    /**
     * Temp login
     * @param username
     * @param password
     */
    onSubmit(username : string, password : string){
        this.loginFailedMessage = '';
        this.stopLoading = false;
        this.loginService.validateUserFireBase(username,password,this);
        //this._router.navigate(['Dash']);
        //this._router.navigate(['Dummy']);

    }

    removeDefault(usrHandle : any){
        usrHandle.value = '';
    }


}
