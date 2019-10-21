import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpdocComponent } from './gpdoc.component';

describe('GpdocComponent', () => {
  let component: GpdocComponent;
  let fixture: ComponentFixture<GpdocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GpdocComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
