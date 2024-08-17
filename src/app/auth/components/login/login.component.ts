import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form!:FormGroup;
  constructor(private formbuilder:FormBuilder,private auth:AuthService,private router:Router){}

  ngOnInit(){
    if(localStorage.getItem('currentUserKey')){
      this.router.navigate(['/'])

    }
    this.form = this.formbuilder.group({
      username:["",Validators.required],
      password:["",Validators.required],
    })
  }

  login(){
    return this.auth.login(this.form.value).subscribe((e:any)=>{
      if(e.token){
        this.auth.LoggedIn.next(true);
        localStorage.setItem(`currentUserKey` , e)
        this.router.navigate(['/'])

      }      
    })
    
    }

}
