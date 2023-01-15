import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product = {
    "name": "mocassin weston",
    "price": 720,00
  }

  constructor() { }

  ngOnInit(): void {
  }

}
