import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowgoComponent } from './nowgo.component';

describe('NowgoComponent', () => {
  let component: NowgoComponent;
  let fixture: ComponentFixture<NowgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
