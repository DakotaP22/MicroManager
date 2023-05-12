import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { BaseTextFieldComponent } from '../base/base-text-field/base-text-field.component';
import { BodyTextComponent } from '../base/body-text/body-text.component';



@Component({
  selector: 'outlined-text-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BodyTextComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: OutlinedTextFieldComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./outlined-text-field.component.scss'],
  template: `
    <div [class]="'wrapper ' + classList()">
      <input
        #input
        [placeholder]="placeholder"
        [disabled]="state() === 'disabled'"
        (focus)="onFocus()"
        (blur)="onBlur()"
        (mouseover)="onMouseOver()"
        (mouseout)="onMouseOut()"
        [classList]="classList()"
      />
      <body-text
        *ngIf="label"
        #label
        (click)="onLabelClick()"
        (mouseover)="onMouseOver()"
        (mouseout)="onMouseOut()"
        [size]="labelSize()"
        [classList]="labelClassList()"
      >
        {{ label }}
      </body-text>
    </div>
    <p>{{ stateMachine.state() }}</p>
  `,
})
export class OutlinedTextFieldComponent extends BaseTextFieldComponent {}
