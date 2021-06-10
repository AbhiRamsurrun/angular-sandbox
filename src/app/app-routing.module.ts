import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarFormComponent } from './components/car/car-form/car-form.component';
import { CarComponent } from './components/car/car.component';
import { HelloworldComponent } from './components/helloworld/helloworld.component';
import { ListComponent } from './components/user/list/list.component';
import { StarShipListComponent } from './components/starship/list/list.component';
import { UserComponent } from './components/user/user.component';
import { DetailsComponent } from './components/starship/details/details.component';

const routes: Routes = [{
  path: 'hello', component: HelloworldComponent
},
{
  path: 'car', component: CarComponent
},
{
  path: 'profile', component: UserComponent
},
{
  path: 'car/add', component: CarFormComponent
},
{
  path: 'car/edit/:slug', component: CarFormComponent
},
{
  path: 'users', component: ListComponent
},
{
  path: 'startShip', component: StarShipListComponent
},
{
  path: 'startShip/details/:id', component: DetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
