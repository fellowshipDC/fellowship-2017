import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoseluisComponent } from './joseluis.component';

describe('JoseluisComponent', () => {
  let component: JoseluisComponent;
  let fixture: ComponentFixture<JoseluisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoseluisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoseluisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
