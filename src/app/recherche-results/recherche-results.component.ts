import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { artisan, ArtisansDataServiceService } from '../artisans-data-service.service';

@Component({
  selector: 'app-recherche-results',
  templateUrl: './recherche-results.component.html',
  styleUrl: './recherche-results.component.scss'
})
export class RechercheResultsComponent implements OnInit {
viewDetails(arg0: string, string: any) {
throw new Error('Method not implemented.');
}
  artisans: artisan[] = [];
  searchQuery: string = '';
  filteredArtisans: artisan[] = [];

  constructor(private route: ActivatedRoute,
    private ArtisansDataServices: ArtisansDataServiceService,
  private router: Router) { }

    ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.searchQuery = params['query'] || '';
        this.performSearch();
      });
    }

    performSearch(): void {
      if (this.searchQuery) {
        this.ArtisansDataServices.searchArtisans(this.searchQuery).subscribe((data: artisan[]) => {
          this.artisans = data;
          this.filteredArtisans = data ;
        });
      }
    }
    viewsDetails(id: string): void {
      this.router.navigate(['/artisan',id]);
    }
}
