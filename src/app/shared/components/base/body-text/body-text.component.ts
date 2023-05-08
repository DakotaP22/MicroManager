import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BodyTextSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'body-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body-text.component.html',
  styleUrls: ['./body-text.component.scss'],
})
export class BodyTextComponent {
  @Input() size: BodyTextSize = 'md';
  @ViewChild('text') textElement?: ElementRef<HTMLParagraphElement>;
}
