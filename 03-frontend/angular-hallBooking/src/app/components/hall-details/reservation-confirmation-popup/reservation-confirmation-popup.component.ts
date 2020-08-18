import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-reservation-confirmation-popup',
  templateUrl: './reservation-confirmation-popup.component.html',
  styleUrls: ['./reservation-confirmation-popup.component.css']
})
export class ReservationConfirmationPopupComponent implements OnInit {

  @Input() datePassed;

  constructor(public activeModal: NgbActiveModal,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    console.log(this.datePassed);
  }

  closeModals(){
    this.modalService.dismissAll();
  }
}
