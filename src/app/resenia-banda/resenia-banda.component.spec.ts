import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseniaBandaComponent } from './resenia-banda.component';

describe('ReseniaBandaComponent', () => {
  let component: ReseniaBandaComponent;
  let fixture: ComponentFixture<ReseniaBandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReseniaBandaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseniaBandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
