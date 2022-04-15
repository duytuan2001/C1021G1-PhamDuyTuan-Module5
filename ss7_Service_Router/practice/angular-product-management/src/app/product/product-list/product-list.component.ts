import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {ProductDeleteComponent} from '../product-delete/product-delete.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(data => {
      this.products = data;
    });
  }
  openDeleteDialog(id) {
    this.productService.findById(id).subscribe(data => {
      const dialogRef = this.dialog.open(ProductDeleteComponent, {
        width: '780px',
        data: {data1: data}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
  }
}
