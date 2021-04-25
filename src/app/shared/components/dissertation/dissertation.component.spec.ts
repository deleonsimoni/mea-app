import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DissertationComponent } from './dissertation.component';

describe('DissertationComponent', () => {
  let component: DissertationComponent;
  let fixture: ComponentFixture<DissertationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DissertationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DissertationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
