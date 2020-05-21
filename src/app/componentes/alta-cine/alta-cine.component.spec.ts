import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaCineComponent } from './alta-cine.component';

describe('AltaCineComponent', () => {
  let component: AltaCineComponent;
  let fixture: ComponentFixture<AltaCineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaCineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaCineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
