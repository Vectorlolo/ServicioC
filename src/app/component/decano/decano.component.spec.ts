import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecanoComponent } from './decano.component';

describe('DecanoComponent', () => {
  let component: DecanoComponent;
  let fixture: ComponentFixture<DecanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
