import { Pipe, PipeTransform } from '@angular/core';
import { artisan } from './artisans-data-service.service';

@Pipe({
  name: 'topArtisan'
})
export class TopArtisanPipe implements PipeTransform {

  transform(artisans:artisan[], isTop: boolean = true): artisan[] {
    if (!artisans) {
      return[];
    }
    return artisans.filter(artisan => artisan.top === isTop);
  }

}
