import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindestudianteComponent } from './findestudiante.component';

describe('FindestudianteComponent', () => {
  let component: FindestudianteComponent;
  let fixture: ComponentFixture<FindestudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindestudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
