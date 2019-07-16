import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistCompleteProfileComponent } from './artist-complete-profile.component';

describe('ArtistCompleteProfileComponent', () => {
  let component: ArtistCompleteProfileComponent;
  let fixture: ComponentFixture<ArtistCompleteProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistCompleteProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistCompleteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
