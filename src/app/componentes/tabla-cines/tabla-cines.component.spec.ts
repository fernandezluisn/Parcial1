import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCinesComponent } from './tabla-cines.component';

describe('TablaCinesComponent', () => {
  let component: TablaCinesComponent;
  let fixture: ComponentFixture<TablaCinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaCinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
