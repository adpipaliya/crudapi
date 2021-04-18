import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  fname: string = "";
  lname: string = "";
  query: "";
  removekey: "";
  res:any = "";
  p=1;

  person = {
    firstname:this.fname,
    lastname:this.lname
  }

  title="";
  todos = [];
  constructor(private _local:LocalstorageService, private _studentservice:StudentService) { }

  ngOnInit(): void {
    this._studentservice.getData().subscribe((response)=>{
      this.todos=response;
    })
  }

  save(){

    this.person.firstname = this.fname;
    this.person.lastname = this.lname;

    this._local.setItem(this.fname,JSON.stringify(this.person))
  }

  search(){
   this.res = this._local.getItem(this.query)
  }

  removeitem(){
    this._local.removeItem(this.removekey);
  }

  removeall(){
    this._local.removeAll();
  }

  searchTitle(){
    
    if(this.title!=""){
      this.todos = this.todos.filter(res=>{
        return res.title.toLocaleLowerCase().match(this.title);
      })
    }
    else{
      this.ngOnInit();
    }
  }

  key = 'userId'
  reverse:boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
}
