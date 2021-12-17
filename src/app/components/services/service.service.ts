import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusModelApi } from '../models/onibus.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  linkIntinerary: string =
    'http://www.poatransporte.com.br/php/facades/process.php?a=il&p=';
  linkApiBus: string =
    'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=';

  getDadosBus(): Observable<BusModelApi[]> {
    return this.http.get<BusModelApi[]>(`${this.linkApiBus}o`);
  }
  getDadosMiniBus(): Observable<BusModelApi[]> {
    return this.http.get<BusModelApi[]>(`${this.linkApiBus}l`);
  }
  getDadosItinerary(id: number): Observable<any> {
    return this.http.get<any>(`${this.linkIntinerary}${id}`);
  }
}
