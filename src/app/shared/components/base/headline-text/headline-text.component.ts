import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'headline-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './headline-text.component.html',
  styleUrls: ['./headline-text.component.scss'],
})
export class HeadlineTextComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
}
