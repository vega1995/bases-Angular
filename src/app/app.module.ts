
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { counterModole } from './counter/counter.module';
import { heroesModule } from './heroes/hero.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    counterModole,
    heroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
