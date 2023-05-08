import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Signal, WritableSignal, computed, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

export type OutlinedTextFieldState =
'unfocused'
| 'hovered'
| 'focused'
| 'error'
| 'disabled';

@Component({
  selector: 'outlined-text-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './outlined-text-field.component.html',
  styleUrls: ['./outlined-text-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OutlinedTextFieldComponent {
  @Input() placeholder?: string;
  @Input() disabled: boolean = false;
  @Input() error?: string;


  _focused: WritableSignal<boolean> = signal(false);
  _hovered: WritableSignal<boolean> = signal(false);
  _disabled: WritableSignal<boolean> = signal(false);
  _error: WritableSignal<string | undefined> = signal(undefined);

  state: Signal<OutlinedTextFieldState> = computed(() => {

    if(this._disabled()) {
      return 'disabled'
    } else if (this._error()) {
      return 'error'
    } else if (this._focused()) {
      return 'focused'
    } else if (this._hovered()) {
      return 'hovered'
    } else {
      return 'unfocused'
    }

  })

  ngOnChanges() {
    this._disabled.set(this.disabled);
    this._error.set(this.error);
  }


  private fb: FormBuilder = inject(FormBuilder);
  form: FormGroup = this.fb.group({
    input: ['']
  })


}
