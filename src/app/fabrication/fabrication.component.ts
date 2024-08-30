import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { artisan, ArtisansDataServiceService } from '../artisans-data-service.service';

@Component({
  selector: 'app-fabrication',
  templateUrl: './fabrication.component.html',
  styleUrl: './fabrication.component.scss'
})
export class FabricationComponent implements OnInit {

  fabricationArtisans: artisan[] = [];

  constructor(private ArtisansDataService: ArtisansDataServiceService,
    private router: Router ) { }

  ngOnInit(): void {
        this.fabricationArtisans = this.ArtisansDataService.getArtisansByCategory('Fabrication');
      }
      detailArtisan(artisanId: string) {
        this.router.navigate(['/artisan', artisanId])
      }
}
