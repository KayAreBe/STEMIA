import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { QuizesComponent } from './quizes/quizes.component';
import { LoginComponent } from './alogin/alogin.component';
import { GuardsGuard } from './guards.guard';
import { AuthenticateService } from './authenticate.service';
import { EventComponent } from './event/event.component';
import { CreateComponent } from './create/create.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { LearnersComponent } from './learners/learners.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    QuizesComponent,
    LoginComponent,
    EventComponent,
    CreateComponent,
    LearnersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticateService, GuardsGuard, ApiserviceService]
})
export class AdminModule { }
