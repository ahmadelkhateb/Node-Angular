import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsSubjectsComponent } from './students-subjects.component';

describe('StudentsSubjectsComponent', () => {
  let component: StudentsSubjectsComponent;
  let fixture: ComponentFixture<StudentsSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
