import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTransmitionsComponent } from './list-transmitions.component';

describe('ListTransmitionsComponent', () => {
  let component: ListTransmitionsComponent;
  let fixture: ComponentFixture<ListTransmitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListTransmitionsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTransmitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
