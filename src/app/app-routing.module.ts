import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientComponent } from './components/add-client/add-client.component';

const routes: Routes = [
  { path: "", component: ListClientsComponent },
  { path: "add", component: AddClientComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
