import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type DisplayTextSizes = 'sm' | 'md' | 'lg';

@Component({
  selector: 'display-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-text.component.html',
  styleUrls: ['./display-text.component.scss'],
})
export class DisplayTextComponent {
  @Input() size: DisplayTextSizes = 'md';
}
