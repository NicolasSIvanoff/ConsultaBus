import { ErrorComponent } from './components/error/error.component';
import { ItinerariosComponent } from './components/itinerario-bus/itinerarios.component';
import { MiniBusComponent } from './components/mini-bus/mini-bus.component';
import { ApiBusComponent } from './components/pageBus/api-bus.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ApiBusComponent },
  { path: 'app-mini-bus', component: MiniBusComponent },
  { path: 'itinerarios/:id', component: ItinerariosComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
