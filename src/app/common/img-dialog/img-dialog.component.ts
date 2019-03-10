import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-img-dialog',
  templateUrl: './img-dialog.component.html',
  styleUrls: ['./img-dialog.component.scss']
})
export class ImgDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ImgDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

}
