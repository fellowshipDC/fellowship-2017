import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NellyComponent } from './nelly.component';

describe('NellyComponent', () => {
  let component: NellyComponent;
  let fixture: ComponentFixture<NellyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NellyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NellyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
