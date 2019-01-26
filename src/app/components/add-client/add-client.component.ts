import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor(
      private clientService: ClientService, 
      private router: Router
    ) { }

  ngOnInit() {
  }

  addClient(form) {
    if(form.valid) {
      this.clientService._persistClient(form.value)
          .then((res) => this.router.navigate(['/']))
          .catch((error) => console.error('i am a catch erro:', error))
    }else {
      alert('form invalid')
    }
  }

}
