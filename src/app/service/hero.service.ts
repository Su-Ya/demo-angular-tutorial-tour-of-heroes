import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from "../../types/hero";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(mockHeroes);
    return heroes;
  }
  getHero(id: number): Observable<Hero | undefined> {
    const hero = mockHeroes.find( hero => hero.id === id);
    if(hero) {
      return of(hero);
    }
    else {
      return of(hero);
    }
  }
}

const mockHeroes: Hero[] = [
  { id: 12, name: 'Dr. Nice' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr. IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
]
