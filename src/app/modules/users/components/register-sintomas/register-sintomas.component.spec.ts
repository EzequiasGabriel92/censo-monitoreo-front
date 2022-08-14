import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSintomasComponent } from './register-sintomas.component';

describe('RegisterSintomasComponent', () => {
  let component: RegisterSintomasComponent;
  let fixture: ComponentFixture<RegisterSintomasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSintomasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSintomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
