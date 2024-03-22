import { Component } from '@angular/core';
import { AdminService } from '../../admin-services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent {

  categoryId: any = this.activatedroute.snapshot.params['categoryId']
  products: any = [];


  constructor(private service:AdminService,
    private activatedroute : ActivatedRoute){
  }

  ngOnInit(){
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
}
