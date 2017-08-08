import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './layout/alert/alert.component';
import { HomepageComponent } from './homepage/homepage.component';

import {AlertService} from './alert.service';
import {LoginService} from './login.service';
import {AuthGuard} from './auth-guard.service';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { PagetitleComponent } from './layout/pagetitle/pagetitle.component';
import { DatatableComponent } from './datatable/datatable.component';
import { InfoboxComponent } from './infobox/infobox.component';
import { AD2000Component } from './ad2000/ad2000.component';

const appRoutes: Routes = [
  { path: 'login',      component: LoginComponent },
  { path: '',      component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'AD2000',      component: AD2000Component, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    HomepageComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    PagetitleComponent,
    DatatableComponent,
    InfoboxComponent,
    AD2000Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [AlertService, LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
