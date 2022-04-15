import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormGroup} from '@angular/forms';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  editProductForm: any;

  productService: Product[];

  constructor(private productService1: ProductService) {
  }

  ngOnInit(): void {
    // this.productService =
  }
}
