import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssPractise1Component } from './css-practise1.component';

describe('CssPractise1Component', () => {
  let component: CssPractise1Component;
  let fixture: ComponentFixture<CssPractise1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssPractise1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssPractise1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
