import { Component } from '@angular/core';
import { AdminService } from '../../admin-services/admin.service';

@Component({
  selector: 'app-get-reservations',
  templateUrl: './get-reservations.component.html',
  styleUrl: './get-reservations.component.css'
})
export class GetReservationsComponent {

  reservations:any;

  constructor(private service:AdminService){}

  ngOnInit(){
    this.getReservations();
  }

  getReservations(){
    this.service.getReservations().subscribe((res)=>{
      this.reservations = res;
    })
  }

  changeReservation(reservationId,status){
    this.service.changeReservations(reservationId,status).subscribe((res)=>{
      if(res.id!==null){
        this.getReservations();
      }
    })
  }
}
