import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsRow } from './metrics-row';

describe('MetricsRow', () => {
  let component: MetricsRow;
  let fixture: ComponentFixture<MetricsRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricsRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricsRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
