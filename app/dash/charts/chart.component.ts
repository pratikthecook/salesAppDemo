/**
 * Created by pratik on 28/3/16.
 */
import {Component}    from   'angular2/core';
import {DoughnutChart} from "../components/chart/doughnutchart/doughnutchart";
import {Message} from "../components/api/message";
import {Growl} from "../components/growl/growl";

@Component({
    selector : 'my-app',
    templateUrl : './app/chart.html',
    directives : [DoughnutChart,Growl]
})


export class ChartComponent{
    data1: any[];

    data2: any[];

    msgs: Message[];

    updated: boolean;

    constructor() {
        this.data1 = [{
            value: 300,
            color: '#693FE8',
            highlight: '#FF5A5E',
            label: 'Angular2'
        },
            {
                value: 50,
                color: '#D73FE8',
                highlight: '#5AD3D1',
                label: 'React'
            },
            {
                value: 100,
                color: '#E83F56',
                highlight: '#FFC870',
                label: 'Ionic'
            }];

        this.data2 = [{
            value: 85,
            color: '#2196F3',
            highlight: '#64B5F6',
            label: 'Vodka'
        },
            {
                value: 70,
                color: '#673AB7',
                highlight: '#9575CD',
                label: 'Rum'
            },
            {
                value: 50,
                color: '#00897B',
                highlight: '#26A69A',
                label: 'Whisky'
            },
            {
                value: 12,
                color: '#FF9800',
                highlight: '#FFB74D',
                label: 'Scotch'
            },
            {
                value: 8,
                color: '#FF5722',
                highlight: '#FF8A65',
                label: 'Gin'
            }];
    }

    onSegmentClick(event) {
        if(event.segments) {
            this.msgs = [{severity: 'info', summary: 'Drink', 'detail': event.segments[0].label}];
        }
    }

    removeYellow() {
        this.data1.pop();
        this.updated = true;
    }

}
