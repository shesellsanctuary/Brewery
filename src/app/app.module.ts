import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NbThemeModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbCardModule, NbListModule } from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeersComponent } from './components/beers/beers.component';
import { BeerItemComponent } from './components/beer-item/beer-item.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    BeersComponent,
    BeerItemComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule,
    NbCardModule,
    NbListModule
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
