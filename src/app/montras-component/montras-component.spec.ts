import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontrasComponent } from './montras-component';

describe('MontrasComponent', () => {
  let component: MontrasComponent;
  let fixture: ComponentFixture<MontrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MontrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MontrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
