import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { listaComponent } from './listaComponent/list.component';
import { ListService } from './list.service';
import { DetailComponent } from './detail/detail.component';
import { ComunicatorService } from './comunicator.service';
import { HeaderComponent } from './header/header.component';
import { DemoRouterModule } from './router/router.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    listaComponent,
    DetailComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DemoRouterModule
  ],
  providers: [ListService, ComunicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
