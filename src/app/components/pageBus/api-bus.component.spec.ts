import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiBusComponent } from './api-bus.component';

describe('ApiBusComponent', () => {
  let component: ApiBusComponent;
  let fixture: ComponentFixture<ApiBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiBusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
