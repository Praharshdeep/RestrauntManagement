import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../admin-services/admin.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {
  categoryId: any = this.activatedroute.snapshot.params['categoryId']
  products: any = [];
  validateForm : FormGroup;
  message : String = null;


  constructor(private service:AdminService,
    private activatedroute : ActivatedRoute,
    private fb:FormBuilder){
  }

  ngOnInit(){
    this.validateForm = this.fb.group({
      title : ['',Validators.required]
    });
    this.getAllProducts();
  }

  getAllProducts(){
    this.products =[];
    this.service.getAllProduct().subscribe((res)=> {
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
        this.products.push(element);})});
  }

  submitForm(){
    this.products =[];
    this.service.getProductsByCategoryAndTitle(this.categoryId,this.validateForm.get(['title']).value).subscribe((res)=>{
      console.log(res);
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
