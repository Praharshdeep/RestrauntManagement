import { Component } from '@angular/core';
import { AuthService } from '../../auth-services/auth-service/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})



export class SignupComponent {
  passwordForm: FormGroup;

  constructor(private fb: FormBuilder,
    private service: AuthService) { }

  ngOnInit() {
    this.passwordForm = this.fb.group({
      email : ['',Validators.required],
      password : ['',Validators.required],
      name : ['',Validators.required]
    })
  }


  register(){
    console.log("helloo");
    this.service.signup(this.passwordForm.value).subscribe(res=>console.log(res))
  }

}
