import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Route, Router, RouterStateSnapshot, UrlSegment } from "@angular/router";
import { ProductListComponent } from "./admin/product-list/product-list.component";
import { AuthService } from "./services/auth.service";

export const EditGuardNewType = (component: ProductListComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) => {

    if (component.isEdit()) {
        return confirm('başka bir sayfaya giderseniz, değişiklikleriniz kaybolacaktır.');
    }
    return true;
}
export const CanOrderLoad = (route: Route, segments: UrlSegment[]) => {
    return false;
}
export const canActivateNewFormat: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    console.log("canActivate çalıştı.");
    if (inject(AuthService).isAuthenticate()) {
      return true;
    }
    return inject(Router).navigateByUrl("/login")
  };
export const CanActivateChildFn = (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
{
    console.log("child canActivate çalıştı")
    return true;
}