import { NgFor } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Hero } from "app/hero";
import { HeroService } from "app/hero.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"],
})
export class HeroesComponent implements OnInit {
  // thís contain both HEROES data and the selected detail => hard to maintain
  // => need to divide into subComponent which focus on specific task
  // tương tự thì build Hero component với detail được binding from hero-detail

  // Giờ thay vì lấy data trực tiếp từ mock file/ sau này là từ backend => create service => service chịu trách nhiệm lấy data (sau này có thể có các function khác)
  // Component không cần biết service implement như nào, chỉ cần biết call function đó để dùng làm gì

  hero: Hero = { id: 11, name: "windstorm" };

  heroes: Hero[] = [];

  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  /*subscribe: start an Observable execution -> deliver value 
  // work base on pub-sub design pattern: publish categorize message into class that recieve by subcribers
  An observable begins publishing values only when someone subscribes to it.
  */
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
