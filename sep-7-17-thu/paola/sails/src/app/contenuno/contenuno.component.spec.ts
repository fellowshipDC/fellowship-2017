import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenunoComponent } from './contenuno.component';

describe('ContenunoComponent', () => {
  let component: ContenunoComponent;
  let fixture: ComponentFixture<ContenunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
