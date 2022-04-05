import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class BookService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any>(environment.api_url + "books");
  }
  create(data: any): Observable<any> {
    return this.http.post<any>(environment.api_url + "books", data);
  }
  update(data, id): Observable<any> {
    return this.http.put<any>(environment.api_url + `books/${id}`, data);
  }
  getById(id): Observable<any> {
    return this.http.get<any>(environment.api_url + `books/${id}`);
  }
  deleteById(id): Observable<any> {
    return this.http.delete<any>(environment.api_url + `books/${id}`);
  }
  
}
