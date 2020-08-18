import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HallBookedDate } from '../common/hall-booked-date';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatesService {

  private baseUrl = 'http://localhost:8080/api/hall-booked-date';

  constructor(private httpClient: HttpClient) { }

  getHallBookedDates(theHallId: number): Observable<HallBookedDate[]> {

   // const dateUrl = `${this.baseUrl}/search/findByHallId?id=${theHallId}`;

    return this.httpClient.get<GetResponseBookedDates>(this.baseUrl).pipe(
      map(response => response._embedded.hallBookedDate)
    );
  }


}

interface GetResponseBookedDates {
  _embedded: {
    hallBookedDate: HallBookedDate[];
  }


}
