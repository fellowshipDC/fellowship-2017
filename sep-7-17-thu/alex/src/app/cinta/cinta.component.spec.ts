import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CintaComponent } from './cinta.component';

describe('CintaComponent', () => {
  let component: CintaComponent;
  let fixture: ComponentFixture<CintaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CintaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CintaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
