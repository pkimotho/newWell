import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanSignupComponent } from './fan-signup.component';

describe('FanSignupComponent', () => {
  let component: FanSignupComponent;
  let fixture: ComponentFixture<FanSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
