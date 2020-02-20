import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarestudianteComponent } from './editarestudiante.component';

describe('EditarestudianteComponent', () => {
  let component: EditarestudianteComponent;
  let fixture: ComponentFixture<EditarestudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarestudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
