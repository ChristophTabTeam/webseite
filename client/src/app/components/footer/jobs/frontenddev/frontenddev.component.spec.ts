import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontenddevComponent } from './frontenddev.component';

describe('FrontenddevComponent', () => {
  let component: FrontenddevComponent;
  let fixture: ComponentFixture<FrontenddevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontenddevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontenddevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
