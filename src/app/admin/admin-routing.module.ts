import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { QuizesComponent } from './quizes/quizes.component';
import { LoginComponent } from './alogin/alogin.component';
import { GuardsGuard } from './guards.guard';
import { EventComponent } from './event/event.component';
import {CreateComponent} from './create/create.component';
import { LearnersComponent } from './learners/learners.component';

const routes: Routes = [

  {path:'dashboard',component: DashboardComponent, canActivate:[GuardsGuard]},
  {path:'alogin',component: LoginComponent},
  {path: 'create', component: CreateComponent},
  {path: 'create/:eventId', component: CreateComponent},
  {path: 'event', component: EventComponent},
  {path: 'learner', component: LearnersComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
