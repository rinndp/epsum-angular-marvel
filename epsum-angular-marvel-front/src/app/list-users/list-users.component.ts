import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GetUsersService} from '../services/db-data/get-users.service';
import {AllUsers, User} from '../services/interfaces/usuario';
import {PopUpService} from '../services/utils/pop-up.service';
import * as bootstrap from 'bootstrap';
import {bottom} from '@popperjs/core';
import {LoginService} from '../services/auth/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss'
})
export class ListUsersComponent implements OnInit {

  arrayUsers: AllUsers[] = [];
  showNoData = false;
  showModal = false;

  constructor(
    private getUsersService: GetUsersService,
    private popUpService: PopUpService,
  ) { }

  ngOnInit() {
    this.popUpService.loading("Cargando datos", "Por favor espere...")
    this.setUsers()
  }

  setUsers() {
    this.getUsersService.getAllUsers().subscribe({
      next: data => {
        this.arrayUsers = data as AllUsers[];

        if (this.arrayUsers.length <= 0) {
          this.showNoData = true;
        }

        this.popUpService.close()
      },

      error: error => {
        console.error(error);
      }
    })
  }

  addNewUser() {
    const modalElement = document.getElementById('modalUser');
    if(modalElement) {
      const modalInstance = new bootstrap.Modal(modalElement)

      if (!this.showModal) {
        modalInstance.show()
      }
    }
  }
}
