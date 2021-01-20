import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivesModalComponent } from './lives-modal.component';

describe('LivesModalComponent', () => {
  let component: LivesModalComponent;
  let fixture: ComponentFixture<LivesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LivesModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
