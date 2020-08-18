import { Hall } from './../common/hall';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HallBookedDate } from '../common/hall-booked-date';

@Injectable({
  providedIn: 'root'
})
export class HallService {

  private baseUrl = 'http://localhost:8080/api/halls';

  constructor(private httpClient: HttpClient) { }

  getHallDetails(theHallId: number): Observable<Hall> {
    
    const hallUrl = `${this.baseUrl}/${theHallId}`;

    return this.httpClient.get<Hall>(hallUrl);
  }

  getHallList(): Observable<Hall[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.halls)
    );
  }

  getHallBookedDateList(theHallId: number): Observable<HallBookedDate[]>{

    const dateUrl = `${this.baseUrl}/${theHallId}/hallBookedDates`;
    
    return this.httpClient.get<GetResponseBookedDates>(dateUrl).pipe(
      map(response => response._embedded.hallBookedDate)
    );
  }
 
}

interface GetResponse{
  _embedded: {
    halls: Hall[];
  }
}

interface GetResponseBookedDates{
  _embedded: {
    hallBookedDate: HallBookedDate[];
  }
}

