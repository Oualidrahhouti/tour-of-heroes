import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroesServiceTsService {
  private apiUrl = 'api/heroes';
  constructor(private httpClient: HttpClient) {}

  getHeroes(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl);
  }
}
