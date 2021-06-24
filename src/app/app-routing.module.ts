import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarFormComponent } from './components/car/car-form/car-form.component';
import { CarComponent } from './components/car/car.component';
import { HelloworldComponent } from './components/helloworld/helloworld.component';
import { ListComponent } from './components/user/list/list.component';
import { StarShipListComponent } from './components/starship/list/list.component';
import { UserComponent } from './components/user/user.component';
import { DetailsComponent } from './components/starship/details/details.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  {
    path: 'hello', component: HelloworldComponent, canActivate: [RoleGuard], data: {
      role: 'admin'
    }
  },
  { path: 'car', component: CarComponent },
  { path: 'profile', component: UserComponent },
  { path: 'car/add', component: CarFormComponent, canActivate: [AuthGuard] },
  { path: 'car/edit/:slug', component: CarFormComponent, canActivate: [AuthGuard] },
  { path: 'users', component: ListComponent },
  { path: 'users/:id', component: RegistrationComponent, canActivate: [AuthGuard]},
  {
    path: 'starShip', component: StarShipListComponent,
    children: [
      { path: ':id', component: DetailsComponent, canActivate: [RoleGuard], data:{role: 'admin' } }
    ]
  },
  { path: 'signUp', component: RegistrationComponent },
  { path: 'chat', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
