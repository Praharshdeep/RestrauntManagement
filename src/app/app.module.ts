import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth-components/signup/signup.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth-components/login/login.component';
import { HeaderComponent } from './headers/header/header.component';
import { AdminComponent } from './headers/admin/admin.component';
import { CustomerComponent } from './headers/customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    AdminComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
