import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Product} from './models/product.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica1';
  api = "https://api.escuelajs.co/api/v1/";
  products: Product[] = [];

  http = inject(HttpClient);

  ngOnInit(){
    this.http.get<Product[]>(this.api+"products")
    .subscribe((data) =>{
      this.products = data;
    });
  }

}
