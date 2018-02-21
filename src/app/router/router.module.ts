import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DetailComponent } from '../detail/detail.component';
import { listaComponent } from '../listaComponent/list.component';

const heroesRoutes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "list", component: listaComponent},
    {path: "detail/:id", component: DetailComponent},
    {path: "", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [
    RouterModule.forRoot(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DemoRouterModule { }
