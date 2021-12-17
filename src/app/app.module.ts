import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiBusComponent } from './components/pageBus/api-bus.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/headers/header.component';
import { MiniBusComponent } from './components/mini-bus/mini-bus.component';
import { ItinerariosComponent } from './components/itinerario-bus/itinerarios.component';
import { DataTablesModule } from 'angular-datatables';
@NgModule({
  declarations: [
    AppComponent,
    ApiBusComponent,
    HeaderComponent,
    MiniBusComponent,
    ItinerariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
