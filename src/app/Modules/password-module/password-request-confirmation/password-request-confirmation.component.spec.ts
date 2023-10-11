import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRequestConfirmationComponent } from './password-request-confirmation.component';

xdescribe('PasswordRequestConfirmationComponent', () => {
  let component: PasswordRequestConfirmationComponent;
  let fixture: ComponentFixture<PasswordRequestConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordRequestConfirmationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PasswordRequestConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
