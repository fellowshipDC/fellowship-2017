import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowappComponent } from './nowapp.component';

describe('NowappComponent', () => {
  let component: NowappComponent;
  let fixture: ComponentFixture<NowappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
