import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardsApplyComponent } from './credit-cards-apply.component';

xdescribe('CreditCardsApplyComponent', () => {
  let component: CreditCardsApplyComponent;
  let fixture: ComponentFixture<CreditCardsApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditCardsApplyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreditCardsApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
