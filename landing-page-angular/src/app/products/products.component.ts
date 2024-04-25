import { Component, Pipe } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { productList } from './products.mock';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, ProductDetailComponent, CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productsList = productList;
}
