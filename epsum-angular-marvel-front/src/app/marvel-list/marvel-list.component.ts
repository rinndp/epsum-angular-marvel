import {Component, OnInit} from '@angular/core';
import {PopUpService} from '../services/utils/pop-up.service';
import {CharactersService} from '../services/marvel/characters.service';
import {MarvelCharacter} from '../services/interfaces/marvel-character';

@Component({
  selector: 'app-marvel-list',
  templateUrl: './marvel-list.component.html',
  styleUrl: './marvel-list.component.scss'
})
export class MarvelListComponent implements OnInit {

  arrayCharacters: MarvelCharacter [] = []

  constructor(
    private popUpService: PopUpService,
    private charactersService: CharactersService,
  ) { }

  ngOnInit() {
    this.popUpService.loading("Cargando datos", "Por favor espere...")
    this.setCharacters()
  }

  setCharacters() {
    this.charactersService.getAllMarvelCharacters().subscribe({
      next: response => {
        this.arrayCharacters = response.data.results;
        console.log(response.data.results);
        this.popUpService.close()
      },

      error: err => {
        console.log(err)
      }
    })
  }
}
