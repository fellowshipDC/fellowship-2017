import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanderasComponent } from './banderas.component';

describe('BanderasComponent', () => {
  let component: BanderasComponent;
  let fixture: ComponentFixture<BanderasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanderasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanderasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
