import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth-components/signup/signup.component';
import { LoginComponent } from './auth-components/login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"signup", component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"admin",loadChildren:()=> import("./modules/admin/admin.module").then(m => m.AdminModule)},
  {path:"customer",loadChildren:()=> import("./modules/customer/customer.module").then(m => m.CustomerModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
