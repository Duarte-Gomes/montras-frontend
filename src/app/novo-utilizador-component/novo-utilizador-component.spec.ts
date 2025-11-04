import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoUtilizadorComponent } from './novo-utilizador-component';

describe('NovoUtilizadorComponent', () => {
  let component: NovoUtilizadorComponent;
  let fixture: ComponentFixture<NovoUtilizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovoUtilizadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoUtilizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
