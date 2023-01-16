import { Component } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent {

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: Hero[] = [];

  selectedHero?: Hero;

  onSelect(hero: Hero) {

    this.selectedHero = hero;

  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
