import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordResetConfrimationComponent } from './password-reset-confrimation.component';

describe('PasswordResetConfrimationComponent', () => {
  let component: PasswordResetConfrimationComponent;
  let fixture: ComponentFixture<PasswordResetConfrimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordResetConfrimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordResetConfrimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
