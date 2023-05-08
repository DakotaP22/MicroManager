import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineTextComponent } from './headline-text.component';

describe('HeadlineTextComponent', () => {
  let component: HeadlineTextComponent;
  let fixture: ComponentFixture<HeadlineTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadlineTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeadlineTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
