import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

   getEmployee(id: number): Observable<any> {
     return this.http.get(`${this.baseUrl}/${id}`);
  }


//  
 createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
}
  // createEmployee(data:any):Observable<any>{
  //   return this.http.post<any>("http://localhost:3000/posts",data);
  // }
  
   updateEmployee(id: number, value: any): Observable<Object> {
     return this.http.put(`${this.baseUrl}/${id}`, value);
   }
//   updateEmployee(id:number, data:any): Observable<any>{
//    return this.http.put<any>("http://localhost:3000/posts/"+id,data);
//  }

   deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
//   deleteEmployee(id:number): Observable<any>{
//   return this.http.delete<any>("http://localhost:3000/posts/"+id);
// }
  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
   }
  // getEmployeesList(): Observable<any>{
  //   return this.http.get<any>("http://localhost:3000/posts");
  //   }

   getEmployeeById(id: number): Observable<any>{
     return this.http.get<any>(`${this.baseUrl}/${id}`);
    }

}
