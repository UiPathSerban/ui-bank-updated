import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpLandingComponent } from './help-landing.component';

describe('HelpLandingComponent', () => {
  let component: HelpLandingComponent;
  let fixture: ComponentFixture<HelpLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
