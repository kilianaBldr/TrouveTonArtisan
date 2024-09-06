import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { RechercheResultsComponent } from './recherche-results/recherche-results.component';

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

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  {path:"", component:HomeComponent},
//recherche resultatpage 
  {path:"search", component: RechercheResultsComponent},

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

  {path:"**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
