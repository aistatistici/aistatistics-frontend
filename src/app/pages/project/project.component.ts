import {Component, OnInit} from '@angular/core';
import {ProjectDialogComponent} from './project-dialog/project-dialog.component';
import {MatDialog} from '@angular/material';
import {Project} from '../../shared/project.service';
import {ProjectService} from '../../shared/project.service';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
    public projects: Project[] = [];

    constructor(public dialog: MatDialog,
                public projectService: ProjectService) {
    }

    ngOnInit() {
    }

    add() {
        const dialogRef = this.dialog.open(ProjectDialogComponent, {
            data: {title: '', description: ''}
        });
        dialogRef.afterClosed().subscribe(result => {
            this.projectService.post(result).then((response) =>{
                console.log(response);
            });
            this.projects.push({
                title: result.title,
                description: result.description
            });
        });
    }

    onDeleteProject(project: Project) {

    }
}
