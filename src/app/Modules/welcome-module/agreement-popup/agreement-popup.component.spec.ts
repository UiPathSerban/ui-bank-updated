import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementPopupComponent } from './agreement-popup.component';

xdescribe('AgreementPopupComponent', () => {
  let component: AgreementPopupComponent;
  let fixture: ComponentFixture<AgreementPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgreementPopupComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AgreementPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
