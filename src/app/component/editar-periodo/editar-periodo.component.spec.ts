import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPeriodoComponent } from './editar-periodo.component';

describe('EditarPeriodoComponent', () => {
  let component: EditarPeriodoComponent;
  let fixture: ComponentFixture<EditarPeriodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPeriodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
