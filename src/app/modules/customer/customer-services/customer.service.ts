import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth-services/storage-service/storage.service';

const BASIC_URL = ["http://localhost:8085/"];

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 
  constructor(private http:HttpClient) {}
    
    getAllCategories():Observable<any>{
      return this.http.get<[]>(BASIC_URL+"api/customer/categories")
    }

    getCategoriesByName(title:String):Observable<any>{
      return this.http.get<[]>(BASIC_URL+`api/customer/categories/${title}`)
    }

    getProductsByCategory(categoryId: number):Observable<any>{
      return this.http.get<[]>(BASIC_URL+`api/customer/${categoryId}/products`)
    }

    postReservation(reservationDto:any):Observable<any>{
      reservationDto.customerId = StorageService.getUserId();
      return this.http.post<[]>(BASIC_URL+"api/customer/reservation",reservationDto);
    } 

    getReservationByUser() : Observable<any>{
      const userId = StorageService.getUserId();
      return this.http.get<[]>(BASIC_URL + `api/customer/reservations/${userId}`)
    }

 
}
