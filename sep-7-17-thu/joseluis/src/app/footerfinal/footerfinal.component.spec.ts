import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterfinalComponent } from './footerfinal.component';

describe('FooterfinalComponent', () => {
  let component: FooterfinalComponent;
  let fixture: ComponentFixture<FooterfinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterfinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
