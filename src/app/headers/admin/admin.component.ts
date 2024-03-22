import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../auth-services/storage-service/storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor(private router:Router){}

  logout(){
    StorageService.signout();
    this.router.navigateByUrl("login")
  }
}
