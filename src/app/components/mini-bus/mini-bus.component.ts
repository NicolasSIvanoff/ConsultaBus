import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-mini-bus',
  templateUrl: './mini-bus.component.html',
  styleUrls: ['./mini-bus.component.scss'],
})
export class MiniBusComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  getApiMiniBusSuccess!: any[];
  getApiMiniBusError!: string;
  loading = false;
  constructor(public serv: ServiceService) {}

  ngOnInit(): void {
    this.getApiMiniBus();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.3/i18n/pt_br.json',
      },
    };
  }

  getApiMiniBus() {
    this.loading = true;
    this.serv.getDadosMiniBus().subscribe(
      (data) => {
        this.getApiMiniBusSuccess = data;
        this.dtTrigger.next();
      },
      (error) => {
        this.getApiMiniBusError = error;
      },
      () => (this.loading = false)
    );
  }
}
