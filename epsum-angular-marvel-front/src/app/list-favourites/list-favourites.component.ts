import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GetFavouritesService} from '../services/marvel/get-favourites.service';
import {LoginService} from '../services/auth/login.service';

@Component({
  selector: 'app-list-favourites',
  templateUrl: './list-favourites.component.html',
  styleUrl: './list-favourites.component.scss'
})
export class ListFavouritesComponent implements OnInit {

  constructor(
    private getFavouritesService: GetFavouritesService,
    private loginService: LoginService,

  ) { }

  ngOnInit() {
    const user = this.loginService.getUser();

    if(user?.id) {
      this.getFavouritesService.getAllFavourites(user.id).subscribe({
        next: response => {
          console.log(response);
        },
        error: error => {
          console.log(error);
        }
      })

    }

  }


}
