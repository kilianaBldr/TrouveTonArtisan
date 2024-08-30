import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { artisan, ArtisansDataServiceService } from '../artisans-data-service.service';

@Component({
  selector: 'app-alimentaire',
  templateUrl: './alimentaire.component.html',
  styleUrl: './alimentaire.component.scss'
})
export class AlimentaireComponent implements OnInit {

  alimentationArtisans: artisan[]= [];

  constructor(private ArtisansDataServices: ArtisansDataServiceService,
    private router: Router ) { }

  ngOnInit(): void {
    this.alimentationArtisans = this.ArtisansDataServices.getArtisansByCategory('Alimentation');
  }
  
  detailArtisan(artisanId: string) {
    this.router.navigate(['/artisan', artisanId])
  }

}
