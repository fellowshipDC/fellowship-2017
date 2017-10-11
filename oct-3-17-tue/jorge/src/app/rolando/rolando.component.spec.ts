import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolandoComponent } from './rolando.component';

describe('RolandoComponent', () => {
  let component: RolandoComponent;
  let fixture: ComponentFixture<RolandoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolandoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
