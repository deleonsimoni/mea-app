import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivesEditComponent } from './lives-edit.component';

describe('LivesEditComponent', () => {
  let component: LivesEditComponent;
  let fixture: ComponentFixture<LivesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LivesEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
