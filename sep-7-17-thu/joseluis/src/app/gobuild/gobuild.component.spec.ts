import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GobuildComponent } from './gobuild.component';

describe('GobuildComponent', () => {
  let component: GobuildComponent;
  let fixture: ComponentFixture<GobuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GobuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GobuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
