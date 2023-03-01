import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InclassComponent } from './inclass.component';

describe('InclassComponent', () => {
  let component: InclassComponent;
  let fixture: ComponentFixture<InclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InclassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
