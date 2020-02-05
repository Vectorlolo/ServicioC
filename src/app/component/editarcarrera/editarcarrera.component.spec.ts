import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcarreraComponent } from './editarcarrera.component';

describe('EditarcarreraComponent', () => {
  let component: EditarcarreraComponent;
  let fixture: ComponentFixture<EditarcarreraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarcarreraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarcarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
