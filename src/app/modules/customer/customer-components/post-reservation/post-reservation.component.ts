import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../customer-services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-reservation',
  templateUrl: './post-reservation.component.html',
  styleUrl: './post-reservation.component.css'
})
export class PostReservationComponent {

  validateForm : FormGroup;

  constructor(private fb:FormBuilder,
    private customerService:CustomerService,
    private router:Router){}

  ngOnInit(){
    this.validateForm = this.fb.group({
      tableType : ['',Validators.required],
      dateTime : ['',Validators.required],
      description : ['',Validators.required]
    });
  }

  postReservation(){
    console.log(this.validateForm.value);
    this.customerService.postReservation(this.validateForm.value).subscribe((res)=>{
      if(res.id!==null){
        this.router.navigateByUrl("/customer/dashboard");
      }
    })
  }


}

