import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent {
  productId: number = 0;
  constructor(private activatedRoute: ActivatedRoute) {
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.productId);
  }
}
