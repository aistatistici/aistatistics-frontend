import {Component, OnInit} from '@angular/core';
import {ProjectCardComponent} from "./project-card/project-card.component";
import {CreateProjectComponent} from "./create-project/create-project.component";
import {MatDialog} from "@angular/material";

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
    public projects: ProjectCardComponent[] = [];

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {
    }

    add() {
        const dialogRef = this.dialog.open(CreateProjectComponent, {
            width: '900px',
            data: {title: '', description: ''}
        });
        dialogRef.afterClosed().subscribe(result => {
            let newCard = new ProjectCardComponent();
            newCard.cardTitle = result.title;
            newCard.cardDescription = result.description;
            this.projects.push(newCard);
        })
    }
}
