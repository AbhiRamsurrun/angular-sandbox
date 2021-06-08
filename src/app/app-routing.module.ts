import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarFormComponent } from './components/car/car-form/car-form.component';
import { CarComponent } from './components/car/car.component';
import { HelloworldComponent } from './components/helloworld/helloworld.component';
import { UserComponent } from './components/user/user.component';

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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
