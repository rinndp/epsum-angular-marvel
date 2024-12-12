import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PopUpService} from '../services/utils/pop-up.service';
import {LoginService} from '../services/auth/login.service';
import {RegisterService} from '../services/auth/register.service';
import {LoginUser} from '../services/interfaces/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    private popupService: PopUpService,
    private loginService: LoginService,
    private registerService: RegisterService,
  ) {
    this.loginForm = formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    })
  }

  showPasswordToggle (): void {
    this.showPassword =! this.showPassword;
  }

  enviar () {
    if (this.loginForm.invalid)
      return;


    this.loginService.loginv2(this.loginForm.value as LoginUser).subscribe( {
      next: (response) => {
        this.popupService.showMessage(
          "success", "Iniciar sesión",
          response.message)
      },
      error: err => {
        if (err.status === 401) {
          this.popupService.showMessage(
            "error", "Oops, contraseña incorrecta",
            "Inténtelo de nuevo",)
        } else {
          this.popupService.showMessage(
            "error", "Oops, algo ha salido mal",
            "Inténtelo de nuevo",)
        }
      }
    })
  }
}
