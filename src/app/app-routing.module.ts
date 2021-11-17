import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CancelFlightComponent } from './admin/cancel-flight/cancel-flight.component';
import { CreateFlightComponent } from './admin/create-flight/create-flight.component';
import { ViewFlightsComponent } from './admin/view-flights/view-flights.component';

const routes: Routes = [ 
  {path: 'admin', component: AdminComponent},
  {path: 'create-flight', component: CreateFlightComponent},
  {path: 'cancel-flight', component: CancelFlightComponent},
  {path: 'view-flights', component: ViewFlightsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdminComponent, 
  CreateFlightComponent,
  CancelFlightComponent,
  ViewFlightsComponent
];