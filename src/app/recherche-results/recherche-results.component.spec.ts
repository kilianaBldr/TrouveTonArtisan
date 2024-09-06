import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheResultsComponent } from './recherche-results.component';

describe('RechercheResultsComponent', () => {
  let component: RechercheResultsComponent;
  let fixture: ComponentFixture<RechercheResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechercheResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechercheResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
