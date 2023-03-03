import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAboutComponent } from './admin/about/about.component';
import { AdminContactComponent } from './admin/contact/contact.component';
import { AdminHomeComponent } from './admin/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { OrderLayoutComponent } from './shared/order-layout/order-layout.component';

const routes: Routes = [
  {
  path: '', component: MainLayoutComponent, children: [

    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent }

  ]
},
{
  path: 'admin', component: AdminLayoutComponent, children: [

    { path: 'Admin-Home', component: AdminHomeComponent },
    { path: 'Admin-About', component: AdminAboutComponent },
    { path: 'Admin-Contact', component: AdminContactComponent },
  ]},

  {path: 'order',loadChildren:()=>import('./order/order.module').then(m=>m.OrderModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
