import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteTarjetaComponent } from './estudiante-tarjeta.component';

describe('EstudianteTarjetaComponent', () => {
  let component: EstudianteTarjetaComponent;
  let fixture: ComponentFixture<EstudianteTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
