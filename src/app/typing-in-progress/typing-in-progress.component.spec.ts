import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingInProgressComponent } from './typing-in-progress.component';

describe('TypingInProgressComponent', () => {
  let component: TypingInProgressComponent;
  let fixture: ComponentFixture<TypingInProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypingInProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypingInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
