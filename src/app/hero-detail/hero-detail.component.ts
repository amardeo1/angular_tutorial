import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  @Input() hero?: Hero;

  // This is a lifecycle hook
  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    // This will give id param value as a string
    // Basically we are extracting id form the url
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((specificHero) => {
      this.hero = specificHero;
    });
  }

  goBack(): void {
    // Take me back where I came from
    this.location.back();
  }

}
