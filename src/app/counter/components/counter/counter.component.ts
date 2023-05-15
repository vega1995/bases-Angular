import { Component } from '@angular/core';


@Component(
  {
    selector:'app-counter',
    template:`<h1>{{title}}</h1>
    <h2>Bienvenidos a  Angular</h2>
    <h3>Counter: {{counter}}</h3>
    <button (click)="increasyBy(1)">Aumentar</button>
    <button (click)="increasyBy(0)">Decreser</button>
    <button (click)="resetCounter()">Reset</button>`
  }
)
export class CounterComponent{
  public title:string = 'Mi primer app del vega';
  public counter:number=10;
  increasyBy(value:number):void{
   value==1?this.counter++:this.counter--;

  };

  resetCounter():void{
   this.counter=10;

  }

}
