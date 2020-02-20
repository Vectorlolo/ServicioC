import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoestudianteComponent } from './infoestudiante.component';

describe('InfoestudianteComponent', () => {
  let component: InfoestudianteComponent;
  let fixture: ComponentFixture<InfoestudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoestudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
