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
  constructor(public serv: ServiceService) {}

  ngOnInit(): void {
    this.getApiMiniBus();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
  }

  getApiMiniBus() {
    this.serv.getDadosMiniBus().subscribe((data) => {
      this.getApiMiniBusSuccess = data;
      this.dtTrigger.next();
    });
  }
}
