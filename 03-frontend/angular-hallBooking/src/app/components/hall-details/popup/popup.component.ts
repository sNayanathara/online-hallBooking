import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  //selector: 'app-hall-details',
  templateUrl: './popup1.component.html',
  styleUrls: ['./popup.component.css']
})
export class NgbdModal2Content {
  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  // open() {
  //   this.modalService.open(NgbdModal2Content);
  // }
}

@Component({
  selector: 'abc',
  templateUrl: './popup2.component.html',
  styleUrls: ['./popup.component.css']

})
export class NgbdModal1Content implements OnInit {

  reservationFormGroup: FormGroup;
  constructor(private modalService: NgbModal,
              public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.reservationFormGroup = this.formBuilder.group({
      customerDetails: this.formBuilder.group({
        fullName: ['', Validators.required],
        email: ['', Validators.required],
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
  }

  open() {
    this.modalService.open(NgbdModal2Content);
  }

}

@Component({
  selector: 'ngbd-modal-stacked',
  templateUrl: './popup.component.html'
})
export class NgbdModalStacked {

constructor(private modalService: NgbModal) { }

  open() {
    this.modalService.open(NgbdModal1Content, { scrollable: true });
  }
}