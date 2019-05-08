import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-process-field',
  templateUrl: './process-field.component.html',
  styleUrls: ['./process-field.component.scss']
})
export class ProcessFieldComponent implements OnInit {
    @Input() name: string;
    @Output() created = new EventEmitter();
    value: string;
    options = [
      {value: null, viewValue: "---------"},
      {value: "inverse", viewValue: "Inverse"},
      {value: "abs", viewValue: "Absolute Value"},
      {value: "log", viewValue: "Logarithmic Scale"},
      {value: "min_max_normalization", viewValue: "Min Max Normalization"},
      {value: "difference", viewValue: "Time series difference"}
    ];

    constructor() {
    }

    ngOnInit() {
        this.created.emit(this);
    }

    getValue() {
        return this.value;
    }
}
