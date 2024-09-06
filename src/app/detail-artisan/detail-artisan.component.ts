import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { artisan, ArtisansDataServiceService } from '../artisans-data-service.service';
//Formulaire
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-artisan',
  templateUrl: './detail-artisan.component.html',
  styleUrl: './detail-artisan.component.scss'
})
export class DetailArtisanComponent implements OnInit{

  artisan: artisan | undefined;
  //Formulaire
  contactForm: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  

  constructor(private route: ActivatedRoute,private router: Router,
    private ArtisanDataServices: ArtisansDataServiceService, private fb:FormBuilder) {

      //form
      this.contactForm = this.fb.group({
        name: ['',[Validators.required,Validators.minLength(3)]],
        subject: ['',[Validators.required, Validators.minLength(5)]],
        message: ['',[Validators.required, Validators.minLength(10)]]
      });
    }
    ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) { 
        this.ArtisanDataServices.getArtisanId(id).subscribe((data: artisan | undefined) => {
          this.artisan = data;
        });
      }
    }
    //button detail
    viewDetails(id:string) {
      this.router.navigate(['/artisan',id])
    }
    //form
    onSubmit(): void {
      this.submitted = true ;
      //verifie si le formulaire est valide
      if (this.contactForm.invalid) {
        this.errorMessage = 'Veuillez remplir tous les champs correctement.';
        return;
      }
      //simuler l'envoie dun mail
      this.successMessage = 'Message envoyé avec succès';
      this.errorMessage = '';
      this.contactForm.reset();
      this.submitted = false;
    }
    //get pour acceder facilement au formulaire du template 
    get formControls() {
      return this.contactForm.controls;
    }
  }
