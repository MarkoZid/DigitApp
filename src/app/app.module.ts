import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { HomeComponent } from './Home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';


const appRoute: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Aboutus', component: AboutusComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
