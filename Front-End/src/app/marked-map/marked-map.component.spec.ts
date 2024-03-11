import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkedMapComponent } from './marked-map.component';

describe('MarkedMapComponent', () => {
  let component: MarkedMapComponent;
  let fixture: ComponentFixture<MarkedMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarkedMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarkedMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
