import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  @Input() productList: Product[]; // input do componente. Vai receber um array de objetos de produto

  @Output() ProductSelected: EventEmitter<Product>; // output do componente. Estou criando um evento customizado pra esse componente

  private currentProduct: Product;

  constructor() {
    this.ProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.ProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
