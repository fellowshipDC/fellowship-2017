import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmTitleComponent } from './rm-title.component';

describe('RmTitleComponent', () => {
  let component: RmTitleComponent;
  let fixture: ComponentFixture<RmTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
