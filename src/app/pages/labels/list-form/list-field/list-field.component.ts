import {Component, Input, OnInit} from '@angular/core';
export interface Food {
    value: string;
    viewValue: string;
}
@Component({
  selector: 'app-list-field',
  templateUrl: './list-field.component.html',
  styleUrls: ['./list-field.component.scss']
})
export class ListFieldComponent implements OnInit {
  @Input() foods: Food[];
  constructor() { }

  ngOnInit() {
  }

}
