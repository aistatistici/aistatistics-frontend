import {Component, Input, OnInit} from '@angular/core';
import {CheckboxFieldComponent} from "./checkbox-field/checkbox-field.component";

@Component({
    selector: 'app-checkbox-form',
    templateUrl: './checkbox-form.component.html',
    styleUrls: ['./checkbox-form.component.scss']
})
export class CheckboxFormComponent implements OnInit {
    @Input() labels: string[];
    private inputMap: Record<string, CheckboxFieldComponent> = {};

    constructor() {
    }

    ngOnInit() {
    }

    storeInput(l: string, $event: CheckboxFieldComponent) {
        this.inputMap[l] = $event;
    }

    getValue() {
        return Object.entries(this.inputMap).map(([l, v]: [string, CheckboxFieldComponent]) => {
            return [l, v.getValue()];
        }).reduce((p, [l, v]: [string, boolean]) => {
            p[l] = v;
            return p;
        }, {});
    }
}
