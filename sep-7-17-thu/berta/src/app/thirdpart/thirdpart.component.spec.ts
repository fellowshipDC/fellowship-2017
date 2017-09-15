import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdpartComponent } from './thirdpart.component';

describe('ThirdpartComponent', () => {
  let component: ThirdpartComponent;
  let fixture: ComponentFixture<ThirdpartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdpartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
