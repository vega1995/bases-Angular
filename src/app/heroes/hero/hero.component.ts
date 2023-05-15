import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = 'ironman';
  public age:number = 45;

  get Capitalizado():string{
    return this.name.toUpperCase();
  }

  //metodos
   getHeroDescription():string{

    return `${this.name} tiene ${this.age} años`;
  }

  changeHero():void{
     this.name = 'Spiderman';

  }
  changeAge():void{
    this.age = 25;
  }

  reset():void{
     this.name = 'ironman';
    this.age = 45;
  }

}
