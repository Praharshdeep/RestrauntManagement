import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../admin-services/admin.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  productId:any = this.activeroute.snapshot.params['productId'];
  productForm : FormGroup;
  selectedFile : File | null;
  imagePreview : string|ArrayBuffer|null;
  id:number
  existingImage:string | null = null;
  imgChanged:boolean = false;

  message :string = null

  constructor(
    private service : AdminService,
    private fb:FormBuilder,
    private router:Router,
    private activeroute : ActivatedRoute){}

    ngOnInit(){
      this.productForm = this.fb.group({
        name:['',Validators.required],
        description:['',Validators.required],
        price:['',Validators.required]
      });
      this.getProductById();
    }


    getProductById(){
      this.service.getProductById(this.productId).subscribe((res)=>{
        console.log(res);
        const productDto = res;
        this.existingImage = 'data:image/jpeg;base64,' + res.returnedImg;
        this.productForm.patchValue(productDto); 
      })

    }

    updateProduct(){
      const formData:FormData = new FormData();
      if(this.imgChanged && this.selectedFile){
        formData.append('img',this.selectedFile)
      }
      formData.append('name',this.productForm.get('name').value);
      formData.append('description',this.productForm.get('description').value);
      formData.append('price',this.productForm.get('price').value);
      console.log(formData);
      this.service.updateProduct(this.productId,formData).subscribe((res)=>{
        if(res.id!=null){
          this.router.navigateByUrl('/admin/dashboard');
        }
      })
    }



    onFileSelected(event:any){
        this.selectedFile = event.target.files[0];
        this.previewImage();
        this.imgChanged = true;
        this.existingImage = null;
    }

    previewImage(){
      const reader =new FileReader();
      reader.onload = () =>{
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);

    }


}

