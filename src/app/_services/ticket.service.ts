import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  host:string = " http://localhost:6565/tickets";

  constructor(private http:HttpClient) { }

  bookTicket(ticket:any){
    return this.http.post(this.host, ticket);
  }
  getAllTickets(){
    return this.http.get(this.host);
  }
}
