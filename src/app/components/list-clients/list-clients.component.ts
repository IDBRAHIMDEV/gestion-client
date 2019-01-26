import { Client } from './../../models/client';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {
  
  clients: Client[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClients()
  }

  getClients() {
    this.clientService._getClients()
        .subscribe((res: Client[]) => {
           this.clients = res
           console.log(res);
        })
  }

  deleteClient(id) {
    this.clientService._deleteClient(id)
        .then(() => console.log('ok'))
        .catch((err) => console.error(err))
  }

}
