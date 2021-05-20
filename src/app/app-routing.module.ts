import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { HelloworldComponent } from './components/helloworld/helloworld.component';

const routes: Routes = [{
  path: 'hello', component: HelloworldComponent
},
{
  path: 'car', component: CarComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
