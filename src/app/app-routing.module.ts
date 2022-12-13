import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { HomeComponent } from './home/home.component';
import { CalenderComponent } from './calender/calender.component';
import { CompetitionComponent } from './competition/competition.component';
import { AuthGuard } from './auth.guard';

import { LhomeComponent } from './land-page/lhome/lhome.component';
import { LifesComponent } from './land-page/subjects/lifes/lifes.component';
import { LiteracyComponent } from './land-page/subjects/literacy/literacy.component';
import { MathComponent } from './land-page/subjects/math/math.component';
import { PhysicalComponent } from './land-page/subjects/physical/physical.component';
import { SubpageComponent } from './land-page/subpage/subpage.component';
import { TermsComponent } from './terms/terms.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { MathQComponent } from './land-page/quizzlet/math-q/math-q.component';
import { PhyQComponent } from './land-page/quizzlet/phy-q/phy-q.component';
import { GalleryComponent } from './GALLERY/gallery/gallery.component';
import { EventsComponent } from './GALLERY/events/events.component';
import { ProfileComponent } from './GALLERY/profile/profile.component';
import { PictureComponent } from './GALLERY/picture/picture.component';
import { SubeventsComponent } from './GALLERY/subevents/subevents.component';

const routes: Routes = [
  {path:'',pathMatch:'full',  redirectTo:'/home-page'},
  {path:'home-page', component:HomePageComponent},
  {path: 'about', component:AboutUsComponent},
  {path: 'contact', component:ContactUsComponent},
  {path: 'calender', component:CalenderComponent},
  {path: 'home', component:HomeComponent, canActivate:[AuthGuard]},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'quiz', component:QuizComponent},
  {path:'terms',component:TermsComponent},
  {path: 'competition', component:CompetitionComponent},
  {path:'lhome',component:LhomeComponent},
  {path:'lhome/:id',component:SubpageComponent},
  {path:'physical',component:PhysicalComponent},
  {path:'lifes',component:LifesComponent},
  {path:'math',component:MathComponent},
  {path:'literacy',component:LiteracyComponent},
  {path: 'guidelines', component:GuidelinesComponent},
  {path:'math-q',component:MathQComponent},
  {path: 'phy-q',component:PhyQComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'events',component:EventsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'picture',component:PictureComponent},
  {path:'subevents',component:SubeventsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
