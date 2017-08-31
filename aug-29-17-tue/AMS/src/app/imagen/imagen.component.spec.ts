import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenComponent } from './imagen.component';

describe('ImagenComponent', () => {
  let component: ImagenComponent;
  let fixture: ComponentFixture<ImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
