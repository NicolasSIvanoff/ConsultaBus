import { ServiceService } from '../services/service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-itinerarios',
  templateUrl: './itinerarios.component.html',
  styleUrls: ['./itinerarios.component.scss'],
})
export class ItinerariosComponent implements OnInit {
  getItinerarySuccess!: Array<any>;
  getItineraryError!: string;
  nome!: string;
  codigo!: string;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  loading = false;

  constructor(
    public serv: ServiceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getApiItinerary();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.3/i18n/pt_br.json',
      },
    };
  }

  getApiItinerary(): void {
    this.loading = true;
    const id = this.activatedRoute.snapshot.params.id;
    this.serv.getDadosItinerary(id).subscribe(
      (data) => {
        this.nome = data.nome;
        this.codigo = data.codigo;
        delete data.nome;
        delete data.codigo;
        delete data.idlinha;
        this.getItinerarySuccess = data;
        this.dtTrigger.next();
      },
      (error) => {
        this.getItineraryError = error;
      },
      () => (this.loading = false)
    );
  }
}
