import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Project } from "../../../shared/project.service";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;
  @Output() delete = new EventEmitter<Project>();

  ngOnInit() {
  }
}
