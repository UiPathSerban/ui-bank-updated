import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanLookupComponent } from './loan-lookup.component';

xdescribe('LoanLookupComponent', () => {
  let component: LoanLookupComponent;
  let fixture: ComponentFixture<LoanLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanLookupComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoanLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
