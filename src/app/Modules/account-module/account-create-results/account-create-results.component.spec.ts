import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCreateResultsComponent } from './account-create-results.component';

describe('AccountCreateResultsComponent', () => {
  let component: AccountCreateResultsComponent;
  let fixture: ComponentFixture<AccountCreateResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountCreateResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountCreateResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
