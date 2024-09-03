import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  

  constructor(private route: ActivatedRoute,
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
      if (id) {this.artisan = this.ArtisanDataServices.getArtisanId(id);
      }
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
