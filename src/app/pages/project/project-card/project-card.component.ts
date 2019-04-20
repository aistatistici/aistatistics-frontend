import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit, OnDestroy {
  @Input() test: any;

  public cardTitle: string;
  public cardSubtitle: string;


  constructor(private elementRef?: ElementRef) {}

  ngOnInit() {
    this.cardTitle = this.test.cardTitle;
    this.cardSubtitle = this.test.cardSubtitle;
    console.log(this.test.cardTitle);
  }
  ngOnDestroy(): void {
  }

  delete() {
    this.elementRef.nativeElement.remove();
  }

}
