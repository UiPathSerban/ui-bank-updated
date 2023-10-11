import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeAccountViewComponent } from './dispute-account-view.component';

xdescribe('DisputeAccountViewComponent', () => {
  let component: DisputeAccountViewComponent;
  let fixture: ComponentFixture<DisputeAccountViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisputeAccountViewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DisputeAccountViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
