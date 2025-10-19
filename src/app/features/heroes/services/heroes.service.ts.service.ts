import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { MessagesService } from '../../../core/services/messages/messages.service';

@Injectable({
  providedIn: 'root',
})
export class HeroesServiceTsService {
  private apiUrl = 'api/heroes';
  constructor(
    private httpClient: HttpClient,
    private messagesSerivice: MessagesService
  ) {}

  getHeroes(): Observable<any[]> {
    return this.httpClient
      .get<any[]>(this.apiUrl)
      .pipe(
        tap(() =>
          this.messagesSerivice.addMessage('HeroService: fetched heroes')
        )
      );
  }

  getHeroe(id: number): Observable<any> {
    return this.httpClient
      .get<any>(`${this.apiUrl}/${id}`)
      .pipe(
        tap(() =>
          this.messagesSerivice.addMessage(`HeroService: fetched hero id=${id}`)
        )
      );
  }
}
