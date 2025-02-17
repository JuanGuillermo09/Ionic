import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { UtilsService } from '../services/utils.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  firebasesSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    let user = localStorage.getItem('user');

    return new Promise((resolve) => {

      this.firebasesSvc.getAuth().onAuthStateChanged((auth) => {
        if (auth) {
          if (user) resolve(true);
        }
        else{
          this.firebasesSvc.signOut();
          resolve(false);
        }
      })
    })
  }
}
