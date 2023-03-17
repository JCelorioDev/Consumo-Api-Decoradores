import { Component, Input} from '@angular/core';
import {Product} from './../../models/product.model'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product = {
    'title': '',
    'price': 0,
    'images': [],
    'id' : 0,
    'description' : ''
  };
}
