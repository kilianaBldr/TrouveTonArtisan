import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { AccessibilitesComponent } from './accessibilites/accessibilites.component';
import { CookiesComponent } from './cookies/cookies.component';
import { DonneesPersonnellesComponent } from './donnees-personnelles/donnees-personnelles.component';

const routes: Routes = [

  {path:"", component:HomeComponent},

  {path:"mentionsLegales", component: MentionsLegalesComponent},
  {path:"accessibilite", component: AccessibilitesComponent},
  {path: "cookies", component: CookiesComponent},
  {path:"donneesPersonnelles", component:DonneesPersonnellesComponent},

  {path:"**", redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
