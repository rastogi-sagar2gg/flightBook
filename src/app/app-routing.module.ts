import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { BookingComponent } from "./booking/booking.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/booking', pathMatch: 'full' },
  { path: 'booking',  loadChildren: () => import('./booking/booking.module').then( m=> m.BookingModule ) },
  { path: 'login', loadChildren: () => import('./admin/admin.module').then( m=> m.AdminModule ) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
