import { Component } from '@angular/core';
import { FiltersComponent } from '../filters/filters.component';
import { ProductsComponent } from '../products/products.component';
import { LayoutService } from '../layout.service';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [FiltersComponent,ProductsComponent,NgFor,NgIf,NgClass],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  constructor(private productServices:LayoutService){

  }
  public products:[]=[];
  public limit:number = 10;
  public skip:number = 0;
  public total:number = 0;
  public pageNumbers:number = 0;
  public currentNumber:number = 0

ngOnInit(){
  this.getAllProducts(1)
}

  getAllProducts(page:number){
      let payload:any={};
      payload.skip = 0

    this.productServices.getAllProducts(page,payload).subscribe((e:any)=>{

      this.products = e.products
      this.skip = e.skip
      this.total = e.total
      this.getPageNumbers(e.total)

      this.currentNumber = page
    })
  }

  public searchProducts(page:number,searchCriteria:string){
    this.getAllProducts
    let payload:any={};
    payload.skip = 0
    payload.searchCriteria = searchCriteria

  this.productServices.searchProduct(page,payload).subscribe((e:any)=>{

    this.products = e.products
    this.skip = e.skip
    this.total = e.total
    this.getPageNumbers(e.total)
    console.log(this.products);
    
    this.currentNumber = page
  })
}



  getPageNumbers(total:number):void{  
    // total / limit
     this.pageNumbers = Math.floor(total / 10) + 1;
  }

  getCurrentPageNumber(skip:number){
    //skip / limit
    this.currentNumber = skip / 10
  }

  getSkipFromPageNumber(page:number){
    //limit * pageNumber
    this.skip = 10 * (page-1)
  }

  
}
