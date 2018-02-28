import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { AtoFourPipe } from './ato-four.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    AtoFourPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
