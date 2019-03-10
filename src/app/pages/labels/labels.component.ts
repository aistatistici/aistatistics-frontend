import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {SplitFormComponent} from "./split-form/split-form.component";

export interface Food {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-labels',
    templateUrl: './labels.component.html',
    styleUrls: ['./labels.component.css']
})

export class LabelsComponent implements OnInit {
    form: FormGroup;
    public value: string;
    @ViewChild(SplitFormComponent) formSplit: SplitFormComponent;

    foods: Food[] = [
        {value: 'rev-0', viewValue: 'Reverse'},
        {value: 't-1', viewValue: 'T1'},
        {value: 't-2', viewValue: 'T2'}
    ];

    orders = [
        {id: 100, name: 'order 1'},
        {id: 200, name: 'order 2'},
        {id: 300, name: 'order 3'},
        {id: 400, name: 'order 4'},
        {id: 500, name: 'order 5'}
    ];

    constructor(private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            orders: new FormArray([]),
        });

        this.addCheckboxes();
    }

    submit() {
        console.log(this.form.value.orders);
        console.log(this.formSplit.getValue())
    }

    ngOnInit() {

    }

    private addCheckboxes() {
        this.orders.map(() => {
            const control = new FormControl(false);
            (this.form.controls.orders as FormArray).push(control);
        });
    }

}
