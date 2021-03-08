import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this,this.createForm();
  }

  createForm(){
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  signIn(){
    //console.log("values", this.loginForm.value.email, 'password', this.loginForm.value.password)
    this.auth.signIn(this.loginForm.value.email, this.loginForm.value.password)
  }

  createAccount(){
    //console.log("values", this.loginForm.value.email, 'password', this.loginForm.value.password)
    this.auth.signUp(this.loginForm.value.email, this.loginForm.value.password)
  }

}
