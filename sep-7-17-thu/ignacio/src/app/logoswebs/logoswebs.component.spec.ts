import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoswebsComponent } from './logoswebs.component';

describe('LogoswebsComponent', () => {
  let component: LogoswebsComponent;
  let fixture: ComponentFixture<LogoswebsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoswebsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoswebsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
