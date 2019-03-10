import {Component, Input, OnInit} from '@angular/core';
import {SplitInputComponent} from "./split-input/split-input.component";

@Component({
    selector: 'app-split-form',
    templateUrl: './split-form.component.html',
    styleUrls: ['./split-form.component.scss']
})
export class SplitFormComponent implements OnInit {
    @Input() labels: string[];
    private inputMap: Record<SplitInputComponent> = {};

    constructor() {
    }

    ngOnInit() {
    }

    storeInput(l: string, $event: SplitInputComponent) {
        this.inputMap[l] = $event;
    }

    getValue() {
        return Object.entries(this.inputMap).map(([l, v]) => {
            return [l, v.getValue()]
        }).reduce((p, [l, v]) => {
            p[l] = v;
            return p;
        }, {});
    }
}
