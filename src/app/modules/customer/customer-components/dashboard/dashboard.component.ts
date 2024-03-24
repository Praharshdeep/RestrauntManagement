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
  validateForm:FormGroup;

  constructor(private service:CustomerService,
    private fb: FormBuilder){
  }

  ngOnInit(){
    this.validateForm = this.fb.group({
      title : [null,Validators.required]
    })
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


  submitForm(){
    this.categories =[];
    if(!this.validateForm.get(['title']).value){
      this.getAllCategories();
    }
    this.service.getCategoriesByName(this.validateForm.get(['title']).value).subscribe((res)=>{
      
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
        this.categories.push(element);
      })
    }
    )
  }


}
