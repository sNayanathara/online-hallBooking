import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReservationConfirmationPopupComponent } from '../reservation-confirmation-popup/reservation-confirmation-popup.component';

@Component({
  selector: 'app-detail-submit-popup',
  templateUrl: './detail-submit-popup.component.html',
  styleUrls: ['./detail-submit-popup.component.css']
})
export class DetailSubmitPopupComponent implements OnInit {

  @Input() date;
  reservationFormGroup: FormGroup;
  submitted = false;


  constructor(private modalService: NgbModal,
              public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.reservationFormGroup = this.formBuilder.group({
      customerDetails: this.formBuilder.group({
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        NIC: ['', Validators.required]
      }),
      creditCardDetails: this.formBuilder.group({
        cardType: ['', Validators.required],
        nameOnCard: ['', Validators.required],
        cardNumber: ['', Validators.required],
        securityCode: ['', Validators.required],
        expirationMonth: ['', Validators.required],
        expirationYear: ['', Validators.required]
      })
    });
    console.log(this.reservationFormGroup)
    //console.log(this.date);
  }

  // getYearList($scope){
  //   let year = new Date().getFullYear();
  //   let range = [];
  //   range.push(year);
  //   for (var i = 1; i < 7; i++) {
  //       range.push(year + i);
  //   }
  //   $scope.years = range;
  // }
 

  get fcd() { return this.reservationFormGroup.controls.customerDetails['controls']; }

  get fccd() { return this.reservationFormGroup.controls.creditCardDetails['controls']; }

  open() {
    this.submitted = true;
    if (this.reservationFormGroup.invalid) {
      return;
    }
    const modelRef = this.modalService.open(ReservationConfirmationPopupComponent);
    modelRef.componentInstance.datePassed = this.date;
    this.submitted = false;
  }

}
