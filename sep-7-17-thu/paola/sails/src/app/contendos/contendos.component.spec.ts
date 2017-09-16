import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContendosComponent } from './contendos.component';

describe('ContendosComponent', () => {
  let component: ContendosComponent;
  let fixture: ComponentFixture<ContendosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContendosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContendosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
