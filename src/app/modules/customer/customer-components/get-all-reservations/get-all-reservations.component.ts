import { Component } from '@angular/core';
import { CustomerService } from '../../customer-services/customer.service';

@Component({
  selector: 'app-get-all-reservations',
  templateUrl: './get-all-reservations.component.html',
  styleUrl: './get-all-reservations.component.css'
})
export class GetAllReservationsComponent {
  reservations:any;
  constructor(private customerService:CustomerService){}
  pending:boolean=false;
  approved:boolean=false;
  disapproved:boolean=false;

  ngOnInit(){
    this.getReservationsByUser();
  }

  getReservationsByUser(){
    this.customerService.getReservationByUser().subscribe((res)=>{
      this.reservations = res.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    })
  })
 }
}
