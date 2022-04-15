import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;

  constructor(public dialogRef: MatDialogRef<ProductDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private productService: ProductService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.product = this.data.data1;
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product.id).subscribe(data => {
      this.dialogRef.close();
      this.snackBar.open('Delete Successfully!', 'OK');
    });
  }
}
