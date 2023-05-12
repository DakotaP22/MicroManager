import { Component, ElementRef, ViewChild, signal, Signal, computed, WritableSignal, Input, inject } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { StateMachine } from '../../StateMachine';
import { Observable, fromEvent, merge } from 'rxjs';
import { BodyTextComponent } from '../body-text/body-text.component';

export type TextFieldState =
  | 'unfocused'
  | 'hovered'
  | 'focused'
  | 'error'
  | 'disabled';

  @Component({
    selector: 'generic-text-input',
    template: '',
  })
  export class BaseTextFieldComponent implements ControlValueAccessor {
    @Input() placeholder: string = '';
    @Input() error?: string;
    @Input() label?: string;
    @ViewChild('input') _input?: ElementRef<HTMLInputElement>;
    @ViewChild('label') _label?: BodyTextComponent;

    stateMachine: StateMachine<TextFieldState> = new StateMachine<TextFieldState>('unfocused');
    private el: ElementRef = inject(ElementRef);

    // signals
    state: WritableSignal<TextFieldState> = signal('unfocused');
    populated = signal(false);
    classList = computed(
      () => `${this.state()} ${this.populated() ? 'populated' : 'unpopulated'}`
    );
    labelClassList = computed(
      () =>
        'label ' +
        (this.state() === 'focused' || this.populated() ? 'raised' : 'resting')
    );
    labelSize = computed(() =>
      this.state() === 'focused' || this.populated() ? 'sm' : 'lg'
    );

    onLabelClick() {
      if (this._input) {
        this._input.nativeElement.focus();
      }
    }

    // value accessor
    onChange = (value: any) => {};
    onTouched = () => {};
    touched = false;
    initialvalue?: string;

    ngAfterViewInit() {
      const el: HTMLInputElement | undefined = this._input?.nativeElement;
      el?.addEventListener('input', () => {
        this.onChange(el.value);
        this.populated.set(el.value.length > 0 || this.placeholder.length > 0);
      });

      if (el && this.initialvalue) el.value = this.initialvalue;


      if (this._input) {

        const $hover = fromEvent(this.el.nativeElement, 'mouseover');
        const $blur = fromEvent(this.el.nativeElement, 'mouseout');
        this.stateMachine
          .when((state) => state === 'unfocused')
          .on($hover, () => 'hovered');

        this.stateMachine
          .when((state) => state === 'hovered')
          .on($blur, () => 'unfocused');

        this.stateMachine.compile();
        this.stateMachine.state();
      }
    }

    ngOnChanges() {
      if (this.error) this.state.set('error');
      console.log(this.error);
      if (this.placeholder.length > 0) this.populated.set(true);
    }

    //#region Value Accessor
    writeValue(obj: any): void {
      const el = this._input?.nativeElement;
      if (el) {
        el.value = obj;
      } else {
        this.initialvalue = obj;
      }
    }

    registerOnChange(fn: any): void {
      this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
      this.onTouched = fn;
    }

    markAsTouched() {
      if (!this.touched) {
        this.touched = true;
        this.onTouched();
      }
    }

    setDisabledState(disabled: boolean) {
      if (disabled) {
        this.onDisable();
      } else {
        this.onEnable();
      }
    }
    //#endregion

    //#region State Reducers
    onFocus() {
      this.state.update((state) => {
        if (state === 'unfocused' || state === 'hovered') {
          return 'focused';
        }
        return state;
      });
    }

    onBlur() {
      this.state.update((state) => {
        if (state === 'focused') {
          return 'unfocused';
        }
        return state;
      });
    }

    onMouseOver() {
      this.state.update((state) => {
        if (state === 'unfocused') {
          return 'hovered';
        }
        return state;
      });
    }

    onMouseOut() {
      this.state.update((state) => (state === 'hovered' ? 'unfocused' : state));
    }

    onDisable() {
      this.state.set('disabled');
    }

    onEnable() {
      this.state.update((state) => {
        if (state === 'disabled') {
          return this.error ? 'error' : 'unfocused';
        } else {
          return state;
        }
      });
    }
    //#endregion
  }
