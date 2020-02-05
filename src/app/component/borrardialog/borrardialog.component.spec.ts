import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrardialogComponent } from './borrardialog.component';

describe('BorrardialogComponent', () => {
  let component: BorrardialogComponent;
  let fixture: ComponentFixture<BorrardialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrardialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrardialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
