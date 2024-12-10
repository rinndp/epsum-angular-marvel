import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GetUsersService} from '../services/db-info/get-users.service';
import {User} from '../services/interfaces/usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.scss'
})
export class ListaUsuariosComponent {
  arrayUsers: User [] = []

  constructor(
    private http: HttpClient,
    private getUsersService: GetUsersService,
  ) { }

  ngOnInit() {
    this.setAllUsers()
  }

  setAllUsers(){
    this.getUsersService.getAllUsers().subscribe({
      next: data => {
        this.arrayUsers = data.results
      },
      error: err => {
        console.log(err);
      },

      complete: () => {
        console.log("comunication complete");
      }
    })
  }
}
