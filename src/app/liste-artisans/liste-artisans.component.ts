import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { artisan, ArtisansDataServiceService } from '../artisans-data-service.service';


@Component({
  selector: 'app-liste-artisans',
  templateUrl: './liste-artisans.component.html',
  styleUrl: './liste-artisans.component.scss'
})
export class ListeArtisansComponent implements OnInit {
artisans: artisan[] = [];

constructor(private ArtisansDataServices: ArtisansDataServiceService,
  private router: Router, ) { }

ngOnInit(): void {
  this.ArtisansDataServices.getArtisans().subscribe((data: artisan[]) => {
    this.artisans = data;
  });
}

viewDetails(id: string) {
  this.router.navigate(['/artisan', id]);
}
}
