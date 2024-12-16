import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PopUpService} from '../services/utils/pop-up.service';
import {Router} from '@angular/router';
import {RegisterService} from '../services/auth/register.service';
import {NewUser} from '../services/interfaces/usuario';

@Component({
  selector: 'app-modal-add-user',
  templateUrl: './modal-add-user.component.html',
  styleUrl: './modal-add-user.component.scss'
})
export class ModalAddUserComponent {
  registerForm: FormGroup;
  showPassword: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    private popupService: PopUpService,
    private router: Router,
    private registerService: RegisterService,
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
    if (this.registerForm.invalid)
      return;

    this.registerService.createUser(this.registerForm.value as NewUser).subscribe({
      next: () => {
        this.closeModal();
        this.popupService.showMessage(
          "success", "Registrarse",
          "Se ha registrado correctamente")

        window.location.reload();
      },


      error: error => {
        console.log(error);
      }
    })
  }

  closeModal() {
    const modalElement = document.getElementById('modalUser');
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement)
      modalInstance?.hide()
    }
  }
}
