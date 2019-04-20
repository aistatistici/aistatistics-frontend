import { Component, OnInit } from '@angular/core';
import {ProjectCardComponent} from "./project-card/project-card.component";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
  public projects: ProjectCardComponent[] = [];
  constructor() {
    let myProject1 = new ProjectCardComponent();
    myProject1.cardTitle = "project 1";
    myProject1.cardSubtitle ="hahaha";
    let myProject2 = new ProjectCardComponent();
    myProject2.cardTitle = "project 2";
    myProject2.cardSubtitle ="hahaha";
    let myProject3 = new ProjectCardComponent();
    myProject3.cardTitle = "project 3";
    myProject3.cardSubtitle ="hahaha";
    this.projects.push(myProject1);
    this.projects.push(myProject2);
    this.projects.push(myProject3);
  }

  ngOnInit() {
  }



}
