import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {

  constructor() {}

  private messages$ = new BehaviorSubject<string>('');
  private heroes$ = new BehaviorSubject<any>(null);

  public messages = this.messages$.asObservable();
  public heroes = this.heroes$.asObservable();

  sendMessages(message: string) {
    this.messages$.next(message);
  }

  sendHeroes(heroes: any) {
    this.heroes$.next(heroes);
  }

}
