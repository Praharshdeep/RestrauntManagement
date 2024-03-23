import { Component } from '@angular/core';
import { AdminService } from '../../admin-services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  categories: any = [];
  validateForm : FormGroup;

  constructor(private service:AdminService,
    private fb: FormBuilder){
  }

  ngOnInit(){
    this.validateForm = this.fb.group({
      title : ['',Validators.required]
    });
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
    this.service.getAllCategoriesByTitle(this.validateForm.get(['title']).value).subscribe((res)=>{
      console.log(res);
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
        this.categories.push(element);
      })
    }
    )
  }


}
