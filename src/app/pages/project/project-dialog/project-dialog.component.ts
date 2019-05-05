import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { Project } from "../../../shared/project.service";

@Component({
    selector: 'app-project-dialog',
    templateUrl: './project-dialog.component.html',
    styleUrls: ['./project-dialog.component.scss']
})

export class ProjectDialogComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<ProjectDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data?: Partial<Project>) {
        !this.data && (this.data = {});
    }

    ngOnInit() {
    }

    cancel() {
        this.dialogRef.close();
    }
}
