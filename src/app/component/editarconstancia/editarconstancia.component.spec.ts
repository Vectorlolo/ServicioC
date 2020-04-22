import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarconstanciaComponent } from './editarconstancia.component';

describe('EditarconstanciaComponent', () => {
  let component: EditarconstanciaComponent;
  let fixture: ComponentFixture<EditarconstanciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarconstanciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarconstanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
