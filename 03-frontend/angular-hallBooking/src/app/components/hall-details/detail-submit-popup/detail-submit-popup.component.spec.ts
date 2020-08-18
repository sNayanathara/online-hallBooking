import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSubmitPopupComponent } from './detail-submit-popup.component';

describe('DetailSubmitPopupComponent', () => {
  let component: DetailSubmitPopupComponent;
  let fixture: ComponentFixture<DetailSubmitPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSubmitPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSubmitPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
