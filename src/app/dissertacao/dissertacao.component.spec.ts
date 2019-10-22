import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DissertacaoComponent } from './dissertacao.component';

describe('DissertacaoComponent', () => {
  let component: DissertacaoComponent;
  let fixture: ComponentFixture<DissertacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DissertacaoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DissertacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
