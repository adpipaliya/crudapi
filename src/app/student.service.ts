import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { toDo } from './student/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = "https://jsonplaceholder.typicode.com/todos";

  constructor(private _http:HttpClient) {

   }

   getData(){
     return this._http.get<toDo[]>(this.url);
   }
}
