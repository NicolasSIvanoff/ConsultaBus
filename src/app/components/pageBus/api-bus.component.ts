import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { itinerarioModel } from '../models/itinerario.model';
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
  getItinerarioSuccess!: itinerarioModel;
  getItinerarioError!: string;
  nome!: string;
  codigo!: string;
  constructor(
    public serv: ServiceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getApiBus();
    this.getApiItinerary();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.3/i18n/pt_br.json',
      },
    };
  }

  getApiBus() {
    this.serv.getDadosBus().subscribe(
      (data) => {
        this.getApiBusSuccess = data;
        this.dtTrigger.next();
      },
      (error) => {
        this.getApiBusError = error;
      }
    );
  }
  getApiItinerary(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.serv.getDadosItinerary(id).subscribe((data) => {
      (this.getItinerarioSuccess = data), (this.nome = data.nome);
      this.codigo = data.codigo;
      delete data.nome;
      delete data.codigo;
      delete data.idlinha;
    });
  }
}
