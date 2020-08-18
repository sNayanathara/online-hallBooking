import { HallService } from './services/hall.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HallListComponent } from './components/hall-list/hall-list.component';
import {HttpClientModule} from '@angular/common/http';

import { Routes, RouterModule} from '@angular/router';
import { HallDetailsComponent } from './components/hall-details/hall-details.component';
import { HallReserveDetailsComponent } from './components/hall-reserve-details/hall-reserve-details.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


import {ToastsContainer} from './components/toasts-container/toasts-container.component';
import {
  NgbdModal1Content,
  NgbdModal2Content,
  NgbdModalStacked
} from './components/hall-details/popup/popup.component';
import { DetailSubmitPopupComponent } from './components/hall-details/detail-submit-popup/detail-submit-popup.component';
import { ReservationConfirmationPopupComponent } from './components/hall-details/reservation-confirmation-popup/reservation-confirmation-popup.component';




const routes: Routes = [
  //{path: 'halls/:id', component: HallDetailsComponent},
  {path: 'halls/:id', component: HallDetailsComponent},
  {path: 'halls', component: HallListComponent},
  {path: '', redirectTo: '/halls', pathMatch: 'full'},
  {path: '**', redirectTo: '/halls', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HallListComponent,
    HallDetailsComponent,
    HallReserveDetailsComponent,
    ToastsContainer,
    NgbdModalStacked,
    NgbdModal1Content, 
    NgbdModal2Content,
    DetailSubmitPopupComponent,
    ReservationConfirmationPopupComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HallService],
  bootstrap: [AppComponent],
  entryComponents: [DetailSubmitPopupComponent, ReservationConfirmationPopupComponent]
})
export class AppModule { }
