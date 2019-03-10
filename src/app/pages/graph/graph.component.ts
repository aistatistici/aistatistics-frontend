import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FileService} from "../../shared/file.service";
import {LabelsComponent} from "../labels/labels.component";
import {MatDialog} from "@angular/material";
import {ImgDialogComponent} from "../../common/img-dialog/img-dialog.component";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
    public chartOptions: any = {
        responsive: true
    };
    public chartLabels = ['2010-01-01', '2007', '2008', '2009', '2010', '2011', '2012'];
    public chartType = 'line';
    public chartLegend = true;
    public chartData: any = null;

    public id: number = null;
    public data: any[][];
    public columns: string[];
    label: any;

    @ViewChild(LabelsComponent) forms: LabelsComponent;
    output: any[] = [];
    ignore: any[] = [];
    time_series_lag: any = 30;
    epochs: any = 100;
    model_path = null;


    constructor(private route: ActivatedRoute, private fileService: FileService,
                public dialog: MatDialog, private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        console.log(this.id);
        this.fileService.getDataFilesByID(this.id).then((data: any) => {
            console.log(data);
            this.columns = data.data.columns;
            this.data = data.data.data;
            this.model_path = data.model_path;
        });

    }


    selectValueChanged($event: any) {
        console.log($event);
        this.chartOptions = Object.assign(this.chartOptions, {
            scales: {
                yAxes: this.columns.filter(c => c != $event).map((c, index) => {
                    return {
                        type: 'linear',
                        position: 'left',
                        id: c,
                    }
                })
            }
        });
        this.chartLabels = this.data[this.columns.indexOf($event)].map(v => {
            try {
                return Date.parse(v);
            } catch (e) {
                return v;
            }
        });
        this.chartData = this.columns.map((c, index) => {
            return {
                data: this.data[index],
                label: c,
                hidden: true,
                yAxisID: c,
            }
        }).filter(c => c.label != $event);
        this.chartData[3].data = this.chartData[2].data
    }

    send() {
        const val = this.forms.getValue();

        this.fileService.split(this.id, val).then(data => {

        });
    }

    train() {
        const body = {
            ignore: this.ignore,
            output: this.output,
            time_series_lag: this.time_series_lag,
            epochs: this.epochs
        };

        this.fileService.train(this.id, body).then(data => {
            this.model_path = 'asdasd';
            const dialogRef = this.dialog.open(ImgDialogComponent, {
                width: '600px',
                data: this.sanitizer.bypassSecurityTrustResourceUrl(data as any)
            });
        })
    }

    predict() {
        this.fileService.predict(this.id).then(data => {
            const dialogRef = this.dialog.open(ImgDialogComponent, {
                width: '600px',
                data: this.sanitizer.bypassSecurityTrustResourceUrl(data as any)
            });
        })
    }
}
