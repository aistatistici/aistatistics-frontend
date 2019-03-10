import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.scss']
})
export class CheckboxFieldComponent implements OnInit {
@Input() name: string;
    @Output() created = new EventEmitter();
    checked: boolean;

    constructor() {
    }

    ngOnInit() {
        this.created.emit(this);
    }

    getValue() {
        return this.checked;
    }

}
