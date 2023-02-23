import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildStudentDetailComponent } from './child-student-detail.component';

describe('ChildStudentDetailComponent', () => {
  let component: ChildStudentDetailComponent;
  let fixture: ComponentFixture<ChildStudentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildStudentDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildStudentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
