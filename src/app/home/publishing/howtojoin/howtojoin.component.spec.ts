import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtojoinComponent } from './howtojoin.component';

describe('HowtojoinComponent', () => {
  let component: HowtojoinComponent;
  let fixture: ComponentFixture<HowtojoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowtojoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowtojoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
