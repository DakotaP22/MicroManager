import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'title-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title-text.component.html',
  styleUrls: ['./title-text.component.scss'],
})
export class TitleTextComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
}
