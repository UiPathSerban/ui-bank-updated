import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordLandingComponent } from './password-landing.component';

xdescribe('PasswordLandingComponent', () => {
  let component: PasswordLandingComponent;
  let fixture: ComponentFixture<PasswordLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordLandingComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PasswordLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
