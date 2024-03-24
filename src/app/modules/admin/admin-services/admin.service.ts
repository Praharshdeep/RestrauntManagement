import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = ["http://localhost:8085/"];

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  postCategory(CategoryDto:any):Observable<any>{
    return this.http.post<[]>(BASIC_URL + "api/admin/category",CategoryDto)
  }

  getAllCategories():Observable<any>{
    return this.http.get<[]>(BASIC_URL+"api/admin/categories")
  }
 
  getAllCategoriesByTitle(title:string):Observable<any>{
    return this.http.get<[]>(BASIC_URL+`api/admin/categories/${title}`)
  }

  postProduct(id:number,productDto:any):Observable<any>{
    return this.http.post<[]>(BASIC_URL + `api/admin/${id}/product`,productDto)
  }

  getProductsByCategories(categoryId:number):Observable<any>{
    return this.http.get<[]>(BASIC_URL+`api/admin/${categoryId}/products`);
  }

  getProductsByCategoryAndTitle(categoryId:number,title:string):Observable<any>{
    return this.http.get<[]>(BASIC_URL+`api/admin/${categoryId}/product/${title}`);
  }

  deleteProduct(productId:number):Observable<any>{
    return this.http.delete<[]>(BASIC_URL + `api/admin/product/${productId}`);
  }

  getProductById(productId:number):Observable<any>{
    return this.http.get<[]>(BASIC_URL+ `api/admin/product/${productId}`);
  }

  updateProduct(productId:number,productDto:any):Observable<any>{
    return this.http.put<[]>(BASIC_URL + `api/admin/product/${productId}`,productDto)
  }

  getAllProduct():Observable<any>{
    return this.http.get<[]>(BASIC_URL + "api/admin/products");
  }

  getReservations() : Observable<any>{
    return this.http.get<[]>(BASIC_URL + "api/admin/reservations")
  }

  changeReservations(reservationId:number,status:string) : Observable<any>{
    return this.http.get<[]>(BASIC_URL + `api/admin/reservations/${reservationId}/${status}`)
  }

}
