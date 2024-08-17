import { Component, Input } from '@angular/core';
import { FiltersComponent } from "../filters/filters.component";
import { ItemComponent } from "../item/item.component";
import { LayoutService } from '../layout.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FiltersComponent, ItemComponent,NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
@Input() productsSource:[]=[]

ngOnInit(){
}

  public countPriceBeforeDiscount(product:any){
    return (product['price'] / (1-(product['discountPercentage'] / 100))).toFixed(2)
  }

}
