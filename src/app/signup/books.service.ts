import { Injectable } from '@angular/core';
import { Book } from './Books';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  url = "http://localhost:3000/api/books/"
  constructor(private _http:HttpClient) { }

  addBook(data:Book):Observable<Book>{
    return this._http.post<Book>(this.url,data);
  }

}
