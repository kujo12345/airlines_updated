import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { CreateFlightComponent } from './admin/create-flight/create-flight.component';
import { CancelFlightComponent } from './admin/cancel-flight/cancel-flight.component';
import { ViewBookingsComponent } from './admin/view-bookings/view-bookings.component';
import { ViewFlightsComponent } from './admin/view-flights/view-flights.component';
import { ViewUsersComponent } from './admin/view-users/view-users.component';
import { BookFlightsComponent } from './admin/book-flights/book-flights.component';
import { LogOutComponent } from './admin/log-out/log-out.component';
import { CancelUserComponent } from './cancel-user/cancel-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    CreateFlightComponent,
    CancelFlightComponent,
    ViewBookingsComponent,
    ViewFlightsComponent,
    ViewUsersComponent,
    BookFlightsComponent,
    LogOutComponent,
    CancelUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
