import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { artisan, ArtisansDataServiceService } from '../artisans-data-service.service';

@Component({
  selector: 'app-batiment',
  templateUrl: './batiment.component.html',
  styleUrl: './batiment.component.scss'
})

export class BatimentComponent implements OnInit {
  batimentArtisans: artisan[] = [];

  constructor(private ArtisansDataServices: ArtisansDataServiceService,
    private router: Router ) { }
  
  ngOnInit(): void {
    this.batimentArtisans = this.ArtisansDataServices.getArtisansByCategory('Bâtiment');
  }
  detailArtisan(artisanId: string) {
    this.router.navigate(['/artisan', artisanId])
  }
}
