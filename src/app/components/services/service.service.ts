import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { itinerarioModel } from '../models/itinerario.model';
import { BusModelApi } from '../models/onibus.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  linkRouteIntinerary: string =
    'http://www.poatransporte.com.br/php/facades/process.php?a=il&p=';

  getDadosBus(): Observable<BusModelApi[]> {
    return this.http.get<BusModelApi[]>(
      'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=o'
    );
  }
  getDadosMiniBus(): Observable<BusModelApi[]> {
    return this.http.get<BusModelApi[]>(
      'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=l'
    );
  }
  getDadosItinerario(): Observable<itinerarioModel> {
    return this.http.get<itinerarioModel>(
      'http://www.poatransporte.com.br/php/facades/process.php?a=il&p=1'
    );
  }
  getDadosItinerary(id: number): Observable<any> {
    return this.http.get<any>(`${this.linkRouteIntinerary}${id}`);
  }
}
