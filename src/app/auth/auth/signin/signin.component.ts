import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthResponseData, AuthService} from "../auth.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  //onSignin(form: NgForm) {
    //const email = form.value.email;
    //const password = form.value.password;
    //this.authService.signinUser(email, password);
 // }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    form.reset();
  }

}
