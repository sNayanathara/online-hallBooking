import { HallBookedDate } from './../../common/hall-booked-date';
import { HallService } from './../../services/hall.service';
import { Component, OnInit, Input, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hall } from 'src/app/common/hall';
import { NgbDateStruct, NgbCalendar, NgbDate, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastServiceService } from 'src/app/services/toast-service.service';
import { DetailSubmitPopupComponent } from './detail-submit-popup/detail-submit-popup.component';
import { ReservationConfirmationPopupComponent } from './reservation-confirmation-popup/reservation-confirmation-popup.component';

@Component({
  selector: 'app-hall-details',
  templateUrl: './hall-details.component.html',
  styleUrls: ['./hall-details.component.css']
})
export class HallDetailsComponent implements OnInit {

  hall: Hall = new Hall();
  hallBookedDates: HallBookedDate[] = [];
  model: NgbDateStruct;
  today = this.calendar.getToday();
  minDate = undefined;
  popOverDisabled: boolean;

  isDisabled = (date: NgbDate, current: { month: number, year: number }) => {
    let calDate;
    let hallDate;
    for (let bookedDateElement of this.hallBookedDates) {
      calDate = new Date(date.year, date.month - 1, date.day)
      hallDate = new Date(bookedDateElement.bookedDate);
      if (calDate.toDateString() === hallDate.toDateString()) {
        return true;
      }
    }
    return false;
  };

  constructor(private route: ActivatedRoute,
    private hallService: HallService,
    private calendar: NgbCalendar,
    public toastService: ToastServiceService,
    private modalService: NgbModal) {

    const current = new Date();
    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate()
    };
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      () => {
        this.handleHallDetails();
      }
    )
    this.getHallBookedDates();

  }

  handleHallDetails() {

    //get the "id" param string and convert it to a number using +
    const theHallId: number = +this.route.snapshot.paramMap.get('id');

    this.hallService.getHallDetails(theHallId).subscribe(
      data => {
        this.hall = data;
      }
    )

  }

  getHallBookedDates() {

    //get the "id" param string and convert it to a number using +
    const theHallId: number = +this.route.snapshot.paramMap.get('id');

    this.hallService.getHallBookedDateList(theHallId).subscribe(
      data => {
        this.hallBookedDates = data;
        console.log(this.hallBookedDates);
      }
    )

  }

  handleReserve() {

    try {

      let textBoxDate = new Date(this.model.year, this.model.month - 1, this.model.day);
      let noOfBookedDates = this.hallBookedDates.length;
      //todays date in Date type
      let currentDate = new Date();
      let count = 1;

      for (let bookedDateElement of this.hallBookedDates) {

        let hallDate = new Date(bookedDateElement.bookedDate);

        if ((textBoxDate.toDateString() === hallDate.toDateString()) || textBoxDate < currentDate) {
          console.log("Already booked");
          this.toastService.show("This date is already reserved", { classname: 'bg-danger text-light', delay: 2000 });
          break;
        } else if (count === noOfBookedDates) {
          const modelRef = this.modalService.open(DetailSubmitPopupComponent, { scrollable: true });
          modelRef.componentInstance.date = textBoxDate;
        } else {
          count++;
          console.log(count);
        }
      }

    } catch (error) {
      this.toastService.show("You haven't reserved a date for the hall", { classname: 'bg-danger text-light', delay: 2000 });
    }
  }




}
