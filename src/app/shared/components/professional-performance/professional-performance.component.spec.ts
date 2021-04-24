import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalPerformanceComponent } from './professional-performance.component';

describe('ProfessionalPerformanceComponent', () => {
  let component: ProfessionalPerformanceComponent;
  let fixture: ComponentFixture<ProfessionalPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionalPerformanceComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
