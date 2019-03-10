import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessFieldComponent } from './process-field.component';

describe('ProcessFieldComponent', () => {
  let component: ProcessFieldComponent;
  let fixture: ComponentFixture<ProcessFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
