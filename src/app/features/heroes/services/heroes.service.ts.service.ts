import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { MessagesService } from '../../../core/services/messages/messages.service';
import { heroes } from '../models/heroes.types';
import { heroe } from '../models/heroes.model';

@Injectable({
  providedIn: 'root',
})
export class HeroesServiceTsService {
  private apiUrl = 'api/heroes';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private httpClient: HttpClient,
    private messagesSerivice: MessagesService
  ) {}

  getHeroes(): Observable<heroes> {
    return this.httpClient
      .get<any[]>(this.apiUrl)
      .pipe(
        tap(() =>
          this.messagesSerivice.addMessage('HeroService: fetched heroes')
        )
      );
  }

  getHeroe(id: number): Observable<heroe> {
    return this.httpClient
      .get<heroe>(`${this.apiUrl}/${id}`)
      .pipe(
        tap(() =>
          this.messagesSerivice.addMessage(`HeroService: fetched hero id=${id}`)
        )
      );
  }

  addHeroe(name: string): Observable<heroe> {
    return this.httpClient.post<heroe>(this.apiUrl, { name }).pipe(
      tap((response) => {
        this.messagesSerivice.addMessage(
          `HeroService: added hero w/ id=${response.id}`
        );
        console.log(response);
      })
    );
  }

  editHeroe(heroe: heroe): Observable<heroe> {
    return this.httpClient.put<heroe>(`${this.apiUrl}/${heroe.id}`, heroe).pipe(
      tap(() => {
        this.messagesSerivice.addMessage(
          `HeroService: updated hero id=${heroe.id}`
        );
      })
    );
  }

  removeHeroe(id: Number): Observable<any> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        this.messagesSerivice.addMessage(`HeroService: deleted hero id=${id}`);
      })
    );
  }
}
