import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../customer-services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
   
  categories: any = [];

  constructor(private service:CustomerService){
  }

  ngOnInit(){
    this.getAllCategories();
  }

  getAllCategories(){
    this.categories =[];
    this.service.getAllCategories().subscribe((res)=> {
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
        this.categories.push(element);
      });
    });
  }



}
