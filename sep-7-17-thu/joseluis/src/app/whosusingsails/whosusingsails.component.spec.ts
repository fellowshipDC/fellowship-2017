import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhosusingsailsComponent } from './whosusingsails.component';

describe('WhosusingsailsComponent', () => {
  let component: WhosusingsailsComponent;
  let fixture: ComponentFixture<WhosusingsailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhosusingsailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhosusingsailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
