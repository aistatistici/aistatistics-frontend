import {Component, Input, OnInit} from '@angular/core';
import {ProcessFieldComponent} from "./process-field/process-field.component";

@Component({
    selector: 'app-process-form',
    templateUrl: './process-form.component.html',
    styleUrls: ['./process-form.component.scss']
})
export class ProcessFormComponent implements OnInit {
    @Input() labels: string[];
    private inputMap: Record<string, ProcessFieldComponent> = {};

    constructor() {
    }

    ngOnInit() {
    }

    storeInput(l: string, $event: ProcessFieldComponent) {
        this.inputMap[l] = $event;
    }

    getValue() {
        return Object.entries(this.inputMap).map(([l, v]) => {
            return [l, v.getValue()];
        }).reduce((p, [l, v]) => {
            p[l] = v;
            return p;
        }, {});
    }
}
