import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartecipateComponent } from './partecipate.component';

describe('PartecipateComponent', () => {
  let component: PartecipateComponent;
  let fixture: ComponentFixture<PartecipateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartecipateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartecipateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
