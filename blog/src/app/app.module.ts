import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ContactComponent } from './components/contact/contact.component';

import {RouterModule, Routes} from "@angular/router";
import { BlogComponent } from './components/blog/blog.component';
import {HomeComponent} from "./components/home/home.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import { SummaryPipe } from './components/summary.pipe';
import { BlogItemDetailComponent } from './components/blog-item-detail/blog-item-detail.component';

import {HttpClientModule} from '@angular/common/http';
import {DataServiceService} from "./services/data-service.service";
import { FilterPipe } from './pipes/filter.pipe';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  { path: 'blog/detail/:id',
    component: BlogItemDetailComponent
  }];



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
    FilterPipe
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
    DataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
