import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  books = {
    name:"",
    qty:"",
    authors:"",
    address:""
  }

  constructor(private bookService:BooksService) { }

  ngOnInit(): void {
  }

  onSubmit(bookForm){

    this.bookService.addBook(bookForm.value).subscribe(res=>{
      console.log(res);
    })
  }

}
