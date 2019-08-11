import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarBeneficioComponent } from './registrar-beneficio.component';

describe('RegistrarBeneficioComponent', () => {
  let component: RegistrarBeneficioComponent;
  let fixture: ComponentFixture<RegistrarBeneficioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarBeneficioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarBeneficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
