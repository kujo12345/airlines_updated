import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { CrudService } from 'shared/crud.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  [x: string]: any;

  constructor(private fb: FormBuilder, private crud: CrudService, private router: Router) {}

  admin$ = [];
  loggedUser: any;

  loginInformation = {
    username: "admin",
    password: "qwe123"
  };

  loginForm = this.fb.group({
    username: ['', Validators.minLength(4), Validators.required],
    password: ['', Validators.minLength(4), Validators.required]
  });


  ngOnInit(): void {
    this.crud.getAdmin().subscribe((loginInformation) => {
      this.admin$ = loginInformation;
    });
    this.loggedUser = JSON.parse(localStorage.getItem('loginInformation'));
    console.log(this.loggedUser['username']);
    console.log(this.loggedUser['password']);

    
  }

  onSubmit(){
    console.warn(this.loginForm.value); //submitting the Username and Password Value
  }

  toAdmin(){
    this.router.navigate('admin'); //this goes to the Admin homepage 
  }
  
  get username() { 
    return this.loginForm.get('username'); 
  }

  get power() { 
    return this.loginForm.get('password'); 
  }

}
