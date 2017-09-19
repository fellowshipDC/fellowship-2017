import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaComponent } from './raza.component';

describe('RazaComponent', () => {
  let component: RazaComponent;
  let fixture: ComponentFixture<RazaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
