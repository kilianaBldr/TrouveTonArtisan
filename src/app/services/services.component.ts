import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { artisan, ArtisansDataServiceService } from '../artisans-data-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  
  servicesArtisans: artisan[] = [];

  constructor(private ArtisansDataService: ArtisansDataServiceService,
    private router: Router ) { }
    
  ngOnInit(): void {
    this.servicesArtisans = this.ArtisansDataService.getArtisansByCategory('Services');
  }
  detailArtisan(artisanId: string) {
    this.router.navigate(['/artisan', artisanId])
  }
}
