import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CommonService } from './common.service';
import { AuthGuard } from './auth.guard';
import { CompetitionComponent } from './competition/competition.component';

import { LhomeComponent } from './land-page/lhome/lhome.component';
import { SubpageComponent } from './land-page/subpage/subpage.component';
import { PhysicalComponent } from './land-page/subjects/physical/physical.component';
import { LifesComponent } from './land-page/subjects/lifes/lifes.component';
import { MathComponent } from './land-page/subjects/math/math.component';
import { LiteracyComponent } from './land-page/subjects/literacy/literacy.component';
import { TermsComponent } from './terms/terms.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { MathQComponent } from './land-page/quizzlet/math-q/math-q.component';
import { PhyQComponent } from './land-page/quizzlet/phy-q/phy-q.component';
import { GalleryComponent } from './GALLERY/gallery/gallery.component';
import { EventsComponent } from './GALLERY/events/events.component';
import { ProfileComponent } from './GALLERY/profile/profile.component';
import { PictureComponent } from './GALLERY/picture/picture.component';
import { SubeventsComponent } from './GALLERY/subevents/subevents.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutUsComponent,
    HomePageComponent,
    ContactUsComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    QuizComponent,
    TermsComponent,
    HomeComponent,
    CompetitionComponent,
    LhomeComponent,
    SubpageComponent,
    PhysicalComponent,
    LifesComponent,
    MathComponent,
    LiteracyComponent,
    GuidelinesComponent,
    MathQComponent,
    PhyQComponent,
    GalleryComponent,
    EventsComponent,
    ProfileComponent,
    PictureComponent,
    SubeventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'home-page',
        component: HomePageComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ]),
  ],
  providers: [CommonService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
