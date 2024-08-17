import { Component } from '@angular/core';
import { LayoutService } from '../layout.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [NgFor],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  constructor(private productServices:LayoutService){}

  public allFilters:Array<string> = [];
  public category:string = '';

 ngOnInit(){
  this.getAllProduct()
console.log(this.allFilters);

}
  getAllProduct(){
    this.productServices.getAllCategories().subscribe((e:any)=>this.allFilters = e)
  }

  onFilterChange(e:any){
    this.category = e.value
 }

}
