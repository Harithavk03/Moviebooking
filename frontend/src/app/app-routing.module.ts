import { MovieListComponent } from './movie-list/movie-list.component';
import { NoPageComponent } from './no-page/no-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MoviesComponent } from './bookings/movies/movies.component';
import { TicketBookingsComponent } from './bookings/ticket-bookings/ticket-bookings.component';


const routes: Routes = [
  { path: '',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  { path: 'dashboard',
    component:DashboardComponent
  },
  { path: 'login',
    component:LoginComponent
  },
  { path: 'reg',
    component:RegisterComponent
  },
  {
    component:MovieListComponent,
    path:'movies',
  },
  {
    path:'showing',
    component:MoviesComponent,
  },
  {
    path:'ticketbook',
    component:TicketBookingsComponent,
  },
  {
    component:NoPageComponent,
    path:'**'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

// export const myRoutingRoutes = [DashboardComponent,LoginComponent,RegisterComponent];
