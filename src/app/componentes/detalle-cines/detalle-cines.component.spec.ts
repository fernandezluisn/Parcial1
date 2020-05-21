import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCinesComponent } from './detalle-cines.component';

describe('DetalleCinesComponent', () => {
  let component: DetalleCinesComponent;
  let fixture: ComponentFixture<DetalleCinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
