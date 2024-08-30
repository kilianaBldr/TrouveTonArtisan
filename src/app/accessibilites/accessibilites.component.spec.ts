import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilitesComponent } from './accessibilites.component';

describe('AccessibilitesComponent', () => {
  let component: AccessibilitesComponent;
  let fixture: ComponentFixture<AccessibilitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessibilitesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessibilitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
