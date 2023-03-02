import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, CanDeactivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserListComponent } from './admin/user-list/user-list.component';

export const EditGuardNewType = (component:UserListComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot)=>{
  if(component.isEdit())
  {
    return confirm('Başka bir sayfaya giderseniz,değişiklikleriniz kaybolacaktır.')
  }
  return true;
}

@Injectable({
  providedIn: 'root'
})
export class EditGuard implements CanDeactivate<UserListComponent>{
  canDeactivate(component: UserListComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if(component.isEdit())
    {
      return confirm('Başka bir sayfaya giderseniz,değişiklikleriniz kaybolacaktır.')
    }
    return true;
  }
  
  
}
