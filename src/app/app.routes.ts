import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

export const routes: Routes = [
    {path:"", component: LoginComponent, pathMatch:'full'},
    {path:"principal", component: PrincipalComponent },
    {path:"sidebar", component: SidebarComponent }

];
