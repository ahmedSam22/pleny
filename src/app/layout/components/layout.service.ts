import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(
    private http: HttpClient
  ) { }

  public products: [] = []
  public cart:number = 0
  public searchCriteria: string = ''
  public filterCriteria: string = ''
  

  public getAllProducts(pageNumber: number = 1, payload: any) {


    const { searchCriteria} = payload

    let skipRows = this.getSkipFromPageNumber(10,pageNumber)

      var params = ''
      
    if(searchCriteria) params += `/search?q=${searchCriteria}`
    // // if(filterCriteria) params += `&endPrice=${endPrice}`

    return this.http.get(`https://dummyjson.com/products?limit=10&skip=${skipRows}`)
  }

  public searchProduct(pageNumber: number = 1, payload: any){
    const { searchCriteria} = payload

    let skipRows = this.getSkipFromPageNumber(10,pageNumber)

    return this.http.get(`https://dummyjson.com/products/search?q=${searchCriteria}&limit=10&skip=${skipRows}`)
  }

  getSkipFromPageNumber(limit: number = 10, page: number = 1) {
    const skip = limit * (page - 1)
    return skip
  }

  getCurrentPageNumber(skip: number = 0, limit: number = 10) {
    const currentNumber = skip / limit
    return currentNumber;
  }

 


  public getAllCategories() {
    return this.http.get(`https://dummyjson.com/products/category-list`)
  }

}
