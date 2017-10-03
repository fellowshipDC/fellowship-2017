import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingComponent } from './using.component';

describe('UsingComponent', () => {
  let component: UsingComponent;
  let fixture: ComponentFixture<UsingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
