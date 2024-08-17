import { LayoutComponent } from './../../../layout/components/layout/layout.component';
import { Component, ViewChild } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { NgIf } from '@angular/common';
import { AuthService } from '../../../auth/auth.service';
import { LayoutService } from '../../../layout/components/layout.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [LogoComponent,NgIf,FormsModule ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  providers:[LayoutComponent]
})
export class NavBarComponent {
  constructor(private auth:AuthService,public productServices:LayoutService,private layout: LayoutComponent){

  }
  public searchCriteria:string = '';
  public loggedIn:Boolean = false
  public cartItemsNumber:number = 0;
  @ViewChild(LayoutComponent) LayoutComponent: LayoutComponent;

 
  ngOnInit(){
    this.isLoggedIn()
  }

  isLoggedIn(){
    return this.auth.LoggedIn.subscribe(e=>this.loggedIn = e)
  }

  searchProducts(){
    return this.layout.searchProducts(1,this.searchCriteria)
  }

}
