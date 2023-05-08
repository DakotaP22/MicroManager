import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTextComponent } from './body-text.component';

describe('BodyTextComponent', () => {
  let component: BodyTextComponent;
  let fixture: ComponentFixture<BodyTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BodyTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it("should render with correct properties for size 'sm'", () => {
  //   component.size = 'sm';
  //   fixture.detectChanges();

  //   fixture.whenStable().then(() => {
  //     console.log(component.textElement?.nativeElement.style);
  //     // console.log(p?.classList);
  //     // console.log(p?.style);
  //   })




    //expect(p?.style.fontFamily).toBe('Roboto');
    // expect(p?.style.fontStyle).toBe('Regular');
    // expect(p?.style.fontWeight).toBe('400');
    // expect(p?.style.fontSize).toBe('12px');
    // expect(p?.style.lineHeight).toBe('16px');
    // expect(p?.style.lineHeight).toBe('0.40px');

  });
  // it("should render with correct properties for size 'md'", () => {});
  // it("should render with correct properties for size 'lg'", () => {});
// });
