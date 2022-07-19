import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../models/movie';
import { Ticket } from '../models/titcket';

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.css']
})
export class BookShowComponent implements OnInit {

  bookingForm:FormGroup;
  selectedMovie:Movie;
  totalPrice:number = 0;
  message:string = "";
  ticket:Ticket = null;

  constructor(private activatedRoute:ActivatedRoute) { 
    this.bookingForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      mobile: new FormControl("", [Validators.required]),
      seats: new FormControl("1", [Validators.required])
    })

    this.activatedRoute.params.subscribe(params=>{
      this.selectedMovie = JSON.parse(params['movie']);
    })
  }

  ngOnInit() {
    
  }

  updateTotalPrice(){
    
  }

  bookTicket(){
   
  }
}
