import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-split-input',
    templateUrl: './split-input.component.html',
    styleUrls: ['./split-input.component.scss']
})
export class SplitInputComponent implements OnInit {
    @Input() name: string;
    @Output() created = new EventEmitter();
    value: string;

    constructor() {
    }

    ngOnInit() {
        this.created.emit(this);
    }

    getValue() {
        return !this.value || this.value == '' ? undefined : JSON.parse(this.value);
    }

}
