import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgReduxModule } from 'ng2-redux';
import { StoreModule } from './store'
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { FireService } from './providers/fire.service'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

export const firebaseConfig = {
    apiKey: "AIzaSyB-ThotQG3b2xag7xs07VGoK5s2wN9Vrqw",
    authDomain: "parking-3dbe2.firebaseapp.com",
    databaseURL: "https://parking-3dbe2.firebaseio.com",
    storageBucket: "parking-3dbe2.appspot.com",
    messagingSenderId: "1001157393966"
};

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },

    // {
    //     path: 'heroes',
    //     component: HeroListComponent,
    //     data: { title: 'Heroes List' }
    // },
    // {
    //     path: '',
    //     redirectTo: '/heroes',
    //     pathMatch: 'full'
    // },
    { path: '**', component: LoginComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgReduxModule,
        StoreModule,
        AngularFireModule.initializeApp(firebaseConfig),
        RouterModule.forRoot(appRoutes)

    ],
    providers: [FireService],
    bootstrap: [AppComponent]
})
export class AppModule { }
