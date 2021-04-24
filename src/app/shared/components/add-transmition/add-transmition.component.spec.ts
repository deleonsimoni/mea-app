import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransmitionComponent } from './add-transmition.component';

describe('AddTransmitionComponent', () => {
  let component: AddTransmitionComponent;
  let fixture: ComponentFixture<AddTransmitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTransmitionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransmitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
