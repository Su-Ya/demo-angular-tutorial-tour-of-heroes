import { HeroService } from './../../service/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from "../../../types/hero";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  top5Heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .subscribe( heroes => this.top5Heroes = heroes.slice(0, 5));
  }

}
