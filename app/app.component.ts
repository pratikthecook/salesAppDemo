/**
 * Created by pratik on 22/3/16.
 */
import {Component , ViewEncapsulation , OnInit} from 'angular2/core';
import {Router,RouteConfig, ROUTER_DIRECTIVES, RouterLink , AsyncRoute}  from 'angular2/router';
import {Login}     from        './Login/login.component';
import {Dummy}     from         './dummy.component';
import {DashBoard} from     './dash/dash.main.component';


@Component({
    selector : 'my-app',
    template : `<router-outlet></router-outlet>`,
    encapsulation : ViewEncapsulation.NONE,
    directives : [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/login', name : 'Login' , component : Login , useAsDefault: true},
    {path: '/dummy/...', name: 'Dummy' , component: Dummy},
    {path: '/dash/...' , name: 'Dash' , component: DashBoard}

])

export class AppComponent implements OnInit{
    constructor(private _router : Router){
        //this._router.navigate(['Login']);
    }

    ngOnInit() {
        componentHandler.upgradeAllRegistered();

        // TODO : Check local storage if user is logged in? then => route.decide

        let user : string;

        user  = localStorage.getItem('user');
        console.log('localstorage '+user);
        if(user!=null)
            this._router.navigate(['Dash']);
        else
            this._router.navigate(['Login']);

    }



}
