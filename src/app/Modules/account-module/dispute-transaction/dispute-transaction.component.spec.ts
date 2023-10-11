import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeTransactionComponent } from './dispute-transaction.component';

xdescribe('DisputeTransactionComponent', () => {
  let component: DisputeTransactionComponent;
  let fixture: ComponentFixture<DisputeTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisputeTransactionComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DisputeTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
