import { Component } from '@angular/core';
import { AdminService } from '../../admin-services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent {

  categoryId: any = this.activatedroute.snapshot.params['categoryId']
  products: any = [];
  validateForm : FormGroup;
  message : String = null;


  constructor(private service:AdminService,
    private activatedroute : ActivatedRoute,
    private fb:FormBuilder,
    private router:Router){
  }

  ngOnInit(){
    this.validateForm = this.fb.group({
      title : ['',Validators.required]
    });
    this.getAllProducts();
  }

  getAllProducts(){
    this.products =[];
    this.service.getProductsByCategories(this.categoryId).subscribe((res)=> {
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
        this.products.push(element);
      });
    });
  }

  submitForm(){
    this.products =[];
    if(!this.validateForm.get(['title']).value){
      this.getAllProducts();
    }
    this.service.getProductsByCategoryAndTitle(this.categoryId,this.validateForm.get(['title']).value).subscribe((res)=>{
      //console.log(res);
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
        this.products.push(element);
      })
    }
    )
  }

  deleteProduct(productId:number){
    this.service.deleteProduct(productId).subscribe((res)=>{
      if(res==null){
        this.getAllProducts();
        this.message = "Product Deleted Successfully!"
      }
      else{
        this.message = "Something Went Wrong!"
      }
    })
  }
}
