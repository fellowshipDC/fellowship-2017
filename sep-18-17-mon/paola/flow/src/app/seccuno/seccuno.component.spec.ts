import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccunoComponent } from './seccuno.component';

describe('SeccunoComponent', () => {
  let component: SeccunoComponent;
  let fixture: ComponentFixture<SeccunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
