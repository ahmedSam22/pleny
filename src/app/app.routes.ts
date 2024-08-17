import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/components/layout/layout.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthGuard} from './auth/guard.guard';

export const routes: Routes = [
    {path : 'login' , component : LoginComponent},
    {path : '' , canActivate: [AuthGuard] ,component : LayoutComponent},
];
