import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeBuilderComponent } from './time-builder.component';

describe('TimeBuilderComponent', () => {
  let component: TimeBuilderComponent;
  let fixture: ComponentFixture<TimeBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeBuilderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
