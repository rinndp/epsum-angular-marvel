import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PopUpService} from '../services/utils/pop-up.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;
  showPassword: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    private popupService: PopUpService,
    private router: Router
  ) {
    this.registerForm = formBuilder.group({
      username: ['', [Validators.required]],
      name: ['', [Validators.required]],
      age: ['0'],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    })
  }

  showPasswordToggle (): void {
    this.showPassword =! this.showPassword;
  }

  enviar () {
    if (this.registerForm.invalid) {
      return;
    }


    this.popupService.showMessage(
      "success", "Registrarse",
      "Se ha registrado correctamente")

    this.router.navigate(['login'])
  }
}
