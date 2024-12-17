import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {marvelAuthParams} from '../utils/marvel-auth';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  url: string = 'https://gateway.marvel.com:443/v1/public/characters';
  marvelParams: any = null

  constructor(
    private http: HttpClient,
  ) {
    this.marvelParams = marvelAuthParams()
  }

  getAllMarvelCharacters (): Observable<any> {
    return this.http.get(this.url, {
      params: {
        ...this.marvelParams
      }
    })
  }
}
