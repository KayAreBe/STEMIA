import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathQComponent } from './math-q.component';

describe('MathQComponent', () => {
  let component: MathQComponent;
  let fixture: ComponentFixture<MathQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathQComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
