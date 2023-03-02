import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { CanActivateChildFn, canActivateNewFormat, CanOrderLoad, EditGuardNewType } from './guards';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './main/login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent },
  {path:'home',component:HomeComponent },
  {path:'login',component:LoginComponent },
  {
    path:"admin",canActivate:[canActivateNewFormat],canActivateChild:[CanActivateChildFn],children:[
      { path: '', component: AdminHomeComponent },
      { path: 'home', component: AdminHomeComponent },
      { path: 'product-list', component: ProductListComponent,canDeactivate: [EditGuardNewType]},
    ]
  },
  {
    path:"lazy-order",canLoad:[CanOrderLoad],loadChildren:()=> import('./order/order.module').then(m=>m.OrderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
