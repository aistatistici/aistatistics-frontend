import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-labels',
    templateUrl: './labels.component.html',
    styleUrls: ['./labels.component.css']
})

export class LabelsComponent implements OnInit {
    form: FormGroup;
    orders = [
        {id: 100, name: 'order 1'},
        {id: 200, name: 'order 2'},
        {id: 300, name: 'order 3'},
        {id: 400, name: 'order 4'}
    ];

    constructor(private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            orders: new FormArray([])
        });

        this.addCheckboxes();
    }

    submit() {
        console.log(this.form.value);
    }

    ngOnInit() {

    }

    private addCheckboxes() {
        this.orders.map((o, i) => {
            const control = new FormControl(i === 0); // if first item set to true, else false
            (this.form.controls.orders as FormArray).push(control);
        });
    }

}
