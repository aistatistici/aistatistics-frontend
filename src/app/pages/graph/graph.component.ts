import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {


    public chartOptions = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public chartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public chartType = 'line';
    public chartLegend = true;
    public chartData = [
        {
            data: [65, 59, 80, 81, 56, 55, 40],
            label: 'Series A',
            hidden: false
        },
        {
            data: [28, 48, 40, 19, 86, 27, 90],
            label: 'Series B',
            hidden: true
        },
        {
            data: [42, 12, 51, 19, 23, 27, 76],
            label: 'Series C',
            hidden: true
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
