import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaolaComponent } from './paola.component';

describe('PaolaComponent', () => {
  let component: PaolaComponent;
  let fixture: ComponentFixture<PaolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
