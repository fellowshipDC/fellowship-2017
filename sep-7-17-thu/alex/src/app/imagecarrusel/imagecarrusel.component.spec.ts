import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagecarruselComponent } from './imagecarrusel.component';

describe('ImagecarruselComponent', () => {
  let component: ImagecarruselComponent;
  let fixture: ComponentFixture<ImagecarruselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagecarruselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagecarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
