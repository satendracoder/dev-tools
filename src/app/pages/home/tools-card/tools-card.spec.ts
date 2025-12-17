import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsCard } from './tools-card';

describe('ToolsCard', () => {
  let component: ToolsCard;
  let fixture: ComponentFixture<ToolsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
