import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { artisan, ArtisansDataServiceService } from '../artisans-data-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  artisans: artisan[] = [];
  topArtisans: artisan[] = [];
  searchTerm: string = '';

  constructor (
    private artisansDataService : ArtisansDataServiceService, 
    private router: Router) {}

    ngOnInit(): void {
      this.topArtisans = this.artisansDataService.getTopArtisans();
    }

    detailArtisan(artisanId: string) {
      this.router.navigate(['/artisan', artisanId])
    }


}
