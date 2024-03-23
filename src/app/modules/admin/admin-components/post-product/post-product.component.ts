import { Component } from '@angular/core';
import { AdminService } from '../../admin-services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrl: './post-product.component.css',
})
export class PostProductComponent {
  categoryId: any = this.activeroute.snapshot.params['categoryId'];
  productForm: FormGroup;
  selectedFile: File | null;
  imagePreview: string | ArrayBuffer | null;
  id: number;

  message: string = null;

  constructor(
    private service: AdminService,
    private fb: FormBuilder,
    private router: Router,
    private activeroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  postProduct() {
    console.log(this.productForm.value);
    const formdata: FormData = new FormData();
    formdata.append('img', this.selectedFile);
    formdata.append('name', this.productForm.get('name').value);
    formdata.append('price', this.productForm.get('price').value);
    formdata.append('description', this.productForm.get('description').value);
    console.log(formdata);
    this.service.postProduct(this.categoryId, formdata).subscribe((res) => {
      console.log(res);
      if (res.id != null) {
        this.message = 'Product Posted Succesfully';
        this.router.navigateByUrl('/admin/dashboard');
      } else this.message = 'Productz not posted';
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }
}
