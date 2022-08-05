import { HeroService } from './../../service/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from "../../../types/hero";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    const heroId = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(heroId)
      .subscribe( hero => this.hero = hero);
  }

}
