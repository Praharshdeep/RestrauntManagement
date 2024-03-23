import { Component } from '@angular/core';
import { AdminService } from '../../admin-services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  categoryForm : FormGroup;
  selectedFile : File | null;
  imagePreview : string|ArrayBuffer|null;

  message :string = null

  constructor(
    private service : AdminService,
    private fb:FormBuilder,
    private router:Router){}

    ngOnInit(){
      this.categoryForm = this.fb.group({
        name:['',Validators.required],
        description:['',Validators.required]
      })
    }

    postCategory(){
      console.log(this.categoryForm.value);
      const formdata : FormData = new FormData();
      formdata.append("img",this.selectedFile);
      formdata.append("name",this.categoryForm.get("name").value);
      formdata.append("description",this.categoryForm.get("description").value);
      console.log(formdata)
      this.service.postCategory(formdata).subscribe(
        res=>{console.log(res);
          if(res.id!=null){this.message = "Category Posted Succesfully";
          this.router.navigateByUrl('/admin/dashboard');}
          else this.message = "Category not posted"
        }
      )
    }

    onFileSelected(event:any){
        this.selectedFile = event.target.files[0];
        this.previewImage();
    }

    previewImage(){
      const reader =new FileReader();
      reader.onload = () =>{
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);

    }


}
