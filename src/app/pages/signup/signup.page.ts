import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  validationMessages = {
    names: [{ type: "required", message: "Please enter your full name" }],
    phone: [{ type: "required", message: "Please enter your Phone No." }],
    email: [{ type: "required", message: "Please enter your email" },
    { type: "pattern", message: "The Email entered is incorrect. Try again.." }],
    password: [{ type: "required", message: "Please enter your password" },
    { type: "minlength", message: "Password must be at least 5 characters" }]
  }

  ValidationFormUser: FormGroup;
  loading: any;
  constructor(private formbuilder: FormBuilder, private authService: AuthService, private alertCtrl: AlertController,
    private loadingCtrl: LoadingController, private router: Router, private navCtr: NavController) { }

  ngOnInit() {
    this.ValidationFormUser = this.formbuilder.group({
      names: new FormControl('', Validators.compose([
        Validators.required
      ])),
      phone: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
    })
  }
  //register: ajout user a la base
  registerUser(value) {
    this.showalert();
    try {
      this.authService.userRegistration(value).then(response => {
        console.log(response);
        if (response.user) {
          response.updateProfile({
            displayName: value.names,
            email: value.email,
            phoneNumber: value.phone
          });
          this.loading.dismiss();
          this.router.navigate(['loginscreen']);
        }
      }, error => {
        this.loading.dismiss();
        this.errorLoading(error.message);
      })
    } catch (error) {
      console.log(error)
    }
  }

  async errorLoading(message: any) {
    const loading = await this.alertCtrl.create({
      header: "Error Registering",
      message: message,
      buttons: [{
        text: 'ok',
        handler: () => {
          this.navCtr.navigateBack(['signup']);
        }
      }]
    })
  }

  async showalert() {
    var load = await this.alertCtrl.create({
      message: "please wait...",
    })
    load.present();
  }

}
