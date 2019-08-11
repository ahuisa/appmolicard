import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsesionComponent } from './msesion.component';

describe('MsesionComponent', () => {
  let component: MsesionComponent;
  let fixture: ComponentFixture<MsesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
