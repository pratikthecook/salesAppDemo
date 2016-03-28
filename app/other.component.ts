/**
 * Created by pratik on 28/3/16.
 */
import {Component , ViewEncapsulation , OnInit} from 'angular2/core';
import {Router,RouteConfig, ROUTER_DIRECTIVES, RouterLink , AsyncRoute}  from 'angular2/router';
import {Main}  from './main/dummy.main.component.ts';
import {Other}  from './other.component.ts';

@Component({
    template : '<h1> Child </h1>'
})

export class Other{
    constructor(){
        console.log('Other Child');
    }
}
