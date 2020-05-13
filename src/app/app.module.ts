import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material.module';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { ContactsComponent } from './home/contacts/contacts.component';
import { ProjectComponent } from './home/projects/project/project.component';
import { FooterComponent } from './home/footer/footer.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SliderComponent } from './project-page/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactsComponent,
    ProjectComponent,
    FooterComponent,
    ProjectPageComponent,
    PageNotFoundComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
