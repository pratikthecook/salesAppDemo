/**
 * Created by pratik on 23/3/16.
 */
import {Component , ViewEncapsulation , OnInit} from 'angular2/core';
import {Router,RouteConfig, ROUTER_DIRECTIVES, RouterLink , AsyncRoute}  from 'angular2/router';
import {TabView}   from    './tab/tab.component';
import {Login}  from '../app.component';

@Component({
    templateUrl : './app/dash/dashboard.html',
    directives : [ROUTER_DIRECTIVES],
    Encapsulation : ViewEncapsulation.NONE
})

@RouteConfig([
    {path: '/tab', name : 'TabView' , component : TabView, useAsDefault : true}
    //{path: '/grid', name: 'GridView' , component : GridView}
    //{path: '/form', name: 'Form' , component : FormComponent}
    //{path: '/tree', name: 'TreeView' , component : TreeView}
    //{path: '/accordion', name: 'Accordion' , component : AccordionView}
    //{path: '/carousel' , name: 'Carousel' , component : CarouselView}
    //{path: '/calendar' , name: 'Calendar' , component : CalendarView}
    //{path : '/charts' , name: 'Charts' , component : ChartView}
])
export class DashBoard implements OnInit{
    userFullname : string;
    imagePath : string;

    constructor(private _router : Router){}

    ngOnInit() {
        this.imagePath = 'app/dash/user.jpg';
        componentHandler.upgradeAllRegistered();
        this.userFullname = localStorage.getItem('user');
    }

    logoutUser(){
        console.log('Logout');
        localStorage.removeItem('user');
        this._router.navigate(['Login']);     // Works!
    }

}