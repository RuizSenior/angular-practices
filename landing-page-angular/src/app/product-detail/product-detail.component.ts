import { CurrencyPipe, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productList } from '../products/products.mock';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgStyle, CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

  product?: Product;
  productList: Product[]= productList;


  constructor(private _route: ActivatedRoute){}

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.product = this.productList.find(product => product.id == params['productId'])
    })
  }



}
