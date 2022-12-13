import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubeventsComponent } from './subevents.component';

describe('SubeventsComponent', () => {
  let component: SubeventsComponent;
  let fixture: ComponentFixture<SubeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubeventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
