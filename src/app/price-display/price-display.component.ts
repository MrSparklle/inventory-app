import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html'
})
export class PriceDisplayComponent {
  @Input() price: number;
}
