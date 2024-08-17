import { Component, Input } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  constructor(private productServices:LayoutService){}

  @Input() imgSrc:string = '';
  @Input() discount:number = 0;
  @Input() title:any = '';
  @Input() desc:any = '';
  @Input() beforeDiscount:any = '';
  @Input() afterDiscount:any = '';
  @Input() brand:any = '';
  @Input() category:any = '';
  @Input() stock:any = '';
  @Input() rate:any = '';
  @Input() reviewscount:any = '';


    addToCart(){ //show the items number 
      this.productServices.cart = this.productServices.cart + 1      
    }


}
