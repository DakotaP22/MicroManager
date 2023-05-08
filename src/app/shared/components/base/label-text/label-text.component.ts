import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'label-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './label-text.component.html',
  styleUrls: ['./label-text.component.scss'],
})
export class LabelTextComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
}
