import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaMontraComponent } from './nova-montra-component';

describe('NovaMontraComponent', () => {
  let component: NovaMontraComponent;
  let fixture: ComponentFixture<NovaMontraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaMontraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaMontraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
