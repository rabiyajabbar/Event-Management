import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms' 
import {HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { AddEventComponent } from './component/add-event/add-event.component';
import { ShowEventComponent } from './component/show-event/show-event.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/shared/page-not-found/page-not-found.component';
import { NavComponent } from './component/shared/nav/nav.component';

const routes:Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'add-event', component:AddEventComponent},
  { path: 'show-event', component:ShowEventComponent}
  // { path: '**', component: PageNotFoundComponent }
]
  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AddEventComponent,
    ShowEventComponent,
    RegisterComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavComponent,
   ]
    ,
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes), 
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
