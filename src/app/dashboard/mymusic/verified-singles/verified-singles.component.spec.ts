import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedSinglesComponent } from './verified-singles.component';

describe('VerifiedSinglesComponent', () => {
  let component: VerifiedSinglesComponent;
  let fixture: ComponentFixture<VerifiedSinglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifiedSinglesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiedSinglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
