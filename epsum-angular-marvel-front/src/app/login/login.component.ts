import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PopUpService} from '../services/utils/pop-up.service';


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
    if (this.loginForm.invalid) {
      return;
    }


    this.popupService.showMessage(
      "success", "Iniciar sesión",
      "Se ha iniciado sesión correctamente")
  }
}
