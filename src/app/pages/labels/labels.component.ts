import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SplitFormComponent} from "./split-form/split-form.component";
import {ProcessFormComponent} from "./process-form/process-form.component";
import {CheckboxFormComponent} from "./checkbox-form/checkbox-form.component";

function eliminate_undef(obj: any) {
    Object.keys(obj).forEach(key => obj[key] === undefined && delete obj[key])
    return obj;
}

@Component({
    selector: 'app-labels',
    templateUrl: './labels.component.html',
    styleUrls: ['./labels.component.css']
})

export class LabelsComponent implements OnInit {
    @Input() labels: string[] = [];
    @ViewChild(SplitFormComponent) formSplit: SplitFormComponent;
    @ViewChild(ProcessFormComponent) formProcess: ProcessFormComponent;
    @ViewChild(CheckboxFormComponent) formAugment: CheckboxFormComponent;
    unique: any;
    ignore: any[];

    ngOnInit() {

    }

    getValue() {
        return {
            split: eliminate_undef(this.formSplit.getValue()),
            process: eliminate_undef(this.formProcess.getValue()),
            augment: eliminate_undef(this.formAugment.getValue()),
            unique: this.unique,
            ignore: this.ignore
        }
    }
}