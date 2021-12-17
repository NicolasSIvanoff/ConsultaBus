import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BusModelApi } from '../models/onibus.model';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-api-bus',
  templateUrl: './api-bus.component.html',
  styleUrls: ['./api-bus.component.scss'],
})
export class ApiBusComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  getApiBusSuccess!: BusModelApi[];
  getApiBusError!: string;
  loading = false;

  constructor(public serv: ServiceService) {}

  ngOnInit(): void {
    this.getApiBus();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.3/i18n/pt_br.json',
      },
    };
  }
  getApiBus() {
    this.loading = true;
    this.serv.getDadosBus().subscribe(
      (data) => {
        this.getApiBusSuccess = data;
        this.dtTrigger.next();
      },
      (error) => {
        this.getApiBusError = error;
      },
      () => (this.loading = false)
    );
  }
}
