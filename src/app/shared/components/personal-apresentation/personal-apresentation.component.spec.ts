import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalApresentationComponent } from './personal-apresentation.component';

describe('PersonalApresentationComponent', () => {
  let component: PersonalApresentationComponent;
  let fixture: ComponentFixture<PersonalApresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalApresentationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalApresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
