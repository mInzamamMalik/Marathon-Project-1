import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router'
import "rxjs/add/operator/take";
import "rxjs/add/operator/map";
import { FireService } from '../providers/fire.service';

@Injectable()
export class AuthGuardService {

    constructor(private fs: FireService, private router: Router) {
        console.log("Auth guard Service initialized");
    }

    canActivate() {
        console.log('authGuard: canActivate');
        this.fs.getUser()
            .take(1)
            .subscribe(auth => {
                if (auth) {
                    console.log(auth);
                    console.log('authGuard: authenticated');
                    return true;//allow route
                } else {
                    console.log('authGuard: not authenticated');
                    this.router.navigate(['/login']);
                    alert("login first");
                    return false;//block route
                }
            })
    }

}
