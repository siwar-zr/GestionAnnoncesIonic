import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.page.html',
  styleUrls: ['./login-screen.page.scss'],
})
export class LoginScreenPage implements OnInit {
  //On va citer les messages d erreur dans chaque cas pour les utiliser dans la form
  validationUserMessage = {
    email: [
      { type: "required", message: "please enter your Email" },
      { type: "pattern", message: "The Email entered is Incorrect. Try again" }
    ],
    password: [
      { type: "required", message: "please enter your Password" },
      { type: "minlength", message: "The password must be at least 5 characters or more" }
    ]
  }

  validationFormUser: FormGroup;

  constructor(public formbuilder: FormBuilder, public authservice: AuthService, private router: Router) { }

  ngOnInit() {
    //On va citer les conditions sur les inputs
    this.validationFormUser = this.formbuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        //expression ReGex qui verifie le format de l'email
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    })
  }
  //Login avec Firebase
  LoginUser(value) {
    console.log("I am logged in");
    try {
      this.authservice.loginFireauth(value).then(resp => {
        console.log(resp);
        this.router.navigate(['tabs'])
      })
    } catch (error) {
      console.log(error);
    }
  }

}
