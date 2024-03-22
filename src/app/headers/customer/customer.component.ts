import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../auth-services/storage-service/storage.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  constructor(private router:Router){}

  logout(){
    StorageService.signout();
    this.router.navigateByUrl("login")
  }
}
