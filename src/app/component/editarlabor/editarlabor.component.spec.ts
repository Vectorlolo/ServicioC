import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarlaborComponent } from './editarlabor.component';

describe('EditarlaborComponent', () => {
  let component: EditarlaborComponent;
  let fixture: ComponentFixture<EditarlaborComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarlaborComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarlaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
