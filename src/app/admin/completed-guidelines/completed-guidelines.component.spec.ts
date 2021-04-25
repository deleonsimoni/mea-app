import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedGuidelinesComponent } from './completed-guidelines.component';

describe('CompletedGuidelinesComponent', () => {
  let component: CompletedGuidelinesComponent;
  let fixture: ComponentFixture<CompletedGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedGuidelinesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
