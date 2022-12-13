import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhyQComponent } from './phy-q.component';

describe('PhyQComponent', () => {
  let component: PhyQComponent;
  let fixture: ComponentFixture<PhyQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhyQComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhyQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
