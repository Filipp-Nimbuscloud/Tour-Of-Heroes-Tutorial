import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  heroes = HEROES;
  protected readonly onselect = onselect;
  selectedHero?: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}


