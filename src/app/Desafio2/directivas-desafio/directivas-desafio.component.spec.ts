import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasDesafioComponent } from './directivas-desafio.component';

describe('DirectivasDesafioComponent', () => {
  let component: DirectivasDesafioComponent;
  let fixture: ComponentFixture<DirectivasDesafioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivasDesafioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivasDesafioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
