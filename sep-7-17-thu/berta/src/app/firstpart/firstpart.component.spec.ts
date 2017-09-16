import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstpartComponent } from './firstpart.component';

describe('FirstpartComponent', () => {
  let component: FirstpartComponent;
  let fixture: ComponentFixture<FirstpartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstpartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
