import { Component } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent {

  constructor(private heroService: HeroService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: Hero[] = [];

  selectedHero?: Hero;

  onSelect(hero: Hero) {

    this.selectedHero = hero;

  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes)
        this.changeDetector.detectChanges();
  }
}
