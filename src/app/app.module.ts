import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgReduxModule } from 'ng2-redux';
import { StoreModule } from './store'

import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './providers/auth-guard.service';

import { AngularFireModule } from 'angularfire2';
import { FireService } from './providers/fire.service'

import { ReversePipe } from './pipes/reverse';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { ViewParkingAreaComponent } from './components/admin/view-parking-area/view-parking-area.component';
import { ViewFeedbackComponent } from './components/admin/view-feedback/view-feedback.component';

import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { FeedbackComponent } from './components/user/feedback/feedback.component';
import { ViewParkingSlotsComponent } from './components/user/view-parking-slots/view-parking-slots.component';
import { BookslotComponent } from './components/user/bookslot/bookslot.component';
import { ViewbookingsComponent } from './components/user/viewbookings/viewbookings.component';
import { ViewAllBookingsComponent } from './components/admin/view-all-bookings/view-all-bookings.component';

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

    { path: 'admin/dashboard', component: AdminDashboardComponent, canActivate: [AuthGuardService] },
    { path: 'admin/parking', component: ViewParkingAreaComponent, canActivate: [AuthGuardService] },
    { path: 'admin/feedback', component: ViewFeedbackComponent, canActivate: [AuthGuardService] },
    { path: 'admin/bookings', component: ViewAllBookingsComponent, canActivate: [AuthGuardService] },

    { path: 'user/dashboard', component: UserDashboardComponent, canActivate: [AuthGuardService] },
    { path: 'user/feedback', component: FeedbackComponent, canActivate: [AuthGuardService] },
    { path: 'user/parking', component: ViewParkingSlotsComponent, canActivate: [AuthGuardService] },
    { path: 'user/bookslot', component: BookslotComponent, canActivate: [AuthGuardService] },
    { path: 'user/viewbookings', component: ViewbookingsComponent, canActivate: [AuthGuardService] },

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
        SignupComponent,
        AdminDashboardComponent,
        UserDashboardComponent,
        ViewParkingAreaComponent,
        ViewFeedbackComponent,
        FeedbackComponent,
        ViewParkingSlotsComponent,
        BookslotComponent,
        ViewbookingsComponent,
        ViewAllBookingsComponent,
        ReversePipe
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
    providers: [FireService, AuthGuardService],
    bootstrap: [AppComponent]
})
export class AppModule { }
