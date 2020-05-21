import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaDeCineComponent } from './sala-de-cine.component';

describe('SalaDeCineComponent', () => {
  let component: SalaDeCineComponent;
  let fixture: ComponentFixture<SalaDeCineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaDeCineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaDeCineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
