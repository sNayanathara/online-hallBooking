import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallReserveDetailsComponent } from './hall-reserve-details.component';

describe('HallReserveDetailsComponent', () => {
  let component: HallReserveDetailsComponent;
  let fixture: ComponentFixture<HallReserveDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallReserveDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallReserveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
