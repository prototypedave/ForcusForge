import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakViewComponent } from './break-view.component';

describe('BreakViewComponent', () => {
  let component: BreakViewComponent;
  let fixture: ComponentFixture<BreakViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreakViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
