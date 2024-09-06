import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  searchQuery = '';

  constructor(private router : Router) { }

  onSearch(): void {
    if (this.searchQuery) {
      this.router.navigate(['/search'], { queryParams: {query: this.searchQuery} });
    }
  }
  
}
