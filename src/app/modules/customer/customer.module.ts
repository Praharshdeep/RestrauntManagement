import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomerRoutingModule } from './customer-routing.module';
import { DashboardComponent } from './customer-components/dashboard/dashboard.component';
import { PostReservationComponent } from './customer-components/post-reservation/post-reservation.component';
import { GetAllReservationsComponent } from './customer-components/get-all-reservations/get-all-reservations.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PostReservationComponent,
    GetAllReservationsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
