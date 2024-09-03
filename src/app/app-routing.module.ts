import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { BatimentComponent } from './batiment/batiment.component';
import { ServicesComponent } from './services/services.component';
import { FabricationComponent } from './fabrication/fabrication.component';
import { AlimentaireComponent } from './alimentaire/alimentaire.component';

import { ListeArtisansComponent } from './liste-artisans/liste-artisans.component';
import { DetailArtisanComponent } from './detail-artisan/detail-artisan.component';

import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { AccessibilitesComponent } from './accessibilites/accessibilites.component';
import { CookiesComponent } from './cookies/cookies.component';
import { DonneesPersonnellesComponent } from './donnees-personnelles/donnees-personnelles.component';

const routes: Routes = [

  {path:"", component:HomeComponent},

  {path:"batiment", component: BatimentComponent},
  {path:"services", component: ServicesComponent},
  {path:"fabrication", component: FabricationComponent},
  {path:"alimentaire", component: AlimentaireComponent},

  {path:"artisans", component: ListeArtisansComponent},
  {path:"artisan/:id" , component: DetailArtisanComponent},

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
