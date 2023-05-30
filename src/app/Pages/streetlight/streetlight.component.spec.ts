import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetlightComponent } from './streetlight.component';

describe('StreetlightComponent', () => {
  let component: StreetlightComponent;
  let fixture: ComponentFixture<StreetlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreetlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
