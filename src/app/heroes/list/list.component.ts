import { Component } from '@angular/core';


@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames:string[]=['Spiderman','Ironman','Hulk'];

public deleteHero?:string;

  removeHero():void{
   this.deleteHero= this.heroNames.pop();
  }

}
