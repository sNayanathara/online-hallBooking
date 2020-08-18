import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationConfirmationPopupComponent } from './reservation-confirmation-popup.component';

describe('ReservationConfirmationPopupComponent', () => {
  let component: ReservationConfirmationPopupComponent;
  let fixture: ComponentFixture<ReservationConfirmationPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationConfirmationPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationConfirmationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
