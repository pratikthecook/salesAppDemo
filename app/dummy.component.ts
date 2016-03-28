/**
 * Created by pratik on 23/3/16.
 */
import {Component , ViewEncapsulation , OnInit} from 'angular2/core';
import {Router,RouteConfig, ROUTER_DIRECTIVES, RouterLink , AsyncRoute}  from 'angular2/router';
import {Main}  from './main/dummy.main.component.ts';
import {Other}  from './other.component.ts';

@Component({
    template : `<a [routerLink]="['Other']">Other Component</a>
    <router-outlet></router-outlet>`,
    encapsulation : ViewEncapsulation.NONE,
    directives : [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/main', name : 'Main' , component : Main, useAsDefault: true},
    {path : '/other' , name : 'Other' , component: Other}
])

export class Dummy{

    constructor(private _router : Router){
        console.log('Dummy Parent Route');
        this._router.navigate(['Main']);
    }
}