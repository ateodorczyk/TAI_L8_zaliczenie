import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {QuizComponent} from './components/quiz/quiz.component';
import {ContactComponent} from './components/contact/contact.component';

import {RouterModule, Routes} from "@angular/router";
import {BlogComponent} from './components/blog/blog.component';
import {HomeComponent} from "./components/home/home.component";
import {NavbarComponent} from './components/navbar/navbar.component';
import {BlogItemComponent} from './components/blog-item/blog-item.component';
import {BlogItemTextComponent} from './components/blog-item-text/blog-item-text.component';
import {BlogItemImageComponent} from './components/blog-item-image/blog-item-image.component';
import {SummaryPipe} from './components/summary.pipe';
import {BlogItemDetailComponent} from './components/blog-item-detail/blog-item-detail.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {DataServiceService} from "./services/data-service.service";
import {FilterPipe} from './pipes/filter.pipe';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {BlogHomeComponent} from './components/blog-home/blog-home.component';
import {TextFormatDirective} from './directives/text-format.directive';
import {BlogCreateComponent} from './components/blog-create/blog-create.component';
import {AuthServiceService} from "./services/auth-service.service";
import {AdminGuard} from "./services/admin-guard.guard";
import {AuthInterceptor} from "./services/auth.interceptor";
import {LoginComponent} from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
    canActivate: [AdminGuard],
    data: {state: 'admin'}
  },
  {
    path: 'blog',
    component: BlogHomeComponent,
    canActivate: [AdminGuard],
    data: {state: 'admin'}
  },
  {
    path: 'blog/detail/:id',
    component: BlogItemDetailComponent,
    canActivate: [AdminGuard],
    data: {state: 'admin'}
  },
  {
    path: 'blog/create',
    component: BlogCreateComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ContactComponent,
    HomeComponent,
    BlogComponent,
    NavbarComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    SummaryPipe,
    BlogItemDetailComponent,
    FilterPipe,
    SearchBarComponent,
    BlogHomeComponent,
    TextFormatDirective,
    BlogCreateComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    DataServiceService, AuthServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
