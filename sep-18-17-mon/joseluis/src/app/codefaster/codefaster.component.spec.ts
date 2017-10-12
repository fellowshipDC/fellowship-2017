import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodefasterComponent } from './codefaster.component';

describe('CodefasterComponent', () => {
  let component: CodefasterComponent;
  let fixture: ComponentFixture<CodefasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodefasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodefasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
