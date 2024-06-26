import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../customer-services/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-products-by-category',
  templateUrl: './view-products-by-category.component.html',
  styleUrl: './view-products-by-category.component.css'
})
export class ViewProductsByCategoryComponent {

    categoryId : number = this.activatedRoute.snapshot.params["categoryId"];
    validateForm: FormGroup;
    products:any = [];

    constructor(private activatedRoute: ActivatedRoute,
      private service : CustomerService,
      private fb: FormBuilder){}

    
      ngOnInit(){
        this.getProductsByCategory();
        this.validateForm = this.fb.group({
          title : [null,Validators.required]
        });
      }

      getProductsByCategory(){
        this.service.getProductsByCategory(this.categoryId).subscribe((res)=>{
          res.forEach(element => {
            element.processedImg = "data:image/jpeg;base64," + element.returnedImg;
            this.products.push(element);
          })
          
        });
      }

      submitForm() {
        this.products =[];
        if(!this.validateForm.get(['title']).value){
          this.getProductsByCategory();
        }
        this.service.getProductsByCategoryAndTitle(this.categoryId,this.validateForm.get(['title']).value).subscribe((res)=>{
          
          res.forEach(element => {
            element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
            this.products.push(element);
          })
        }
        )
      }

}
