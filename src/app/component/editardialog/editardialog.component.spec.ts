import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditardialogComponent } from './editardialog.component';

describe('EditardialogComponent', () => {
  let component: EditardialogComponent;
  let fixture: ComponentFixture<EditardialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditardialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditardialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
