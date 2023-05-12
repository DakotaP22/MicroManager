import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OutlinedTextFieldComponent } from './shared/components/outlined-text-field/outlined-text-field.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, OutlinedTextFieldComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'MicroManager';

  fb: FormBuilder = inject(FormBuilder);
  form: FormGroup = this.fb.group({
    firstname: ['', Validators.required],
  })

  constructor() {
    this.form.valueChanges.subscribe((value) => console.log(value));
    // this.form.controls['firstname'].disable();s

    // setTimeout(() => this.form.controls['firstname'].enable(), 5000)
  }

}
