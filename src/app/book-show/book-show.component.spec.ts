import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { db } from 'src/assets/movie-db';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { Ticket } from '../models/titcket';
import { MovieService } from '../_services/movie.service';
import { Movie } from '../models/movie';

import { BookShowComponent } from './book-show.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BookShowComponent', () => {
  let component: BookShowComponent;
  let fixture: ComponentFixture<BookShowComponent>;
  // const fakeActivatedRoute = {
  //   snapshot: {}
  // } as ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookShowComponent, BreadcrumbComponent],
      imports: [ReactiveFormsModule, RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BookShowComponent);
    component = fixture.componentInstance;

    component.bookingForm = new FormGroup({
      "email": new FormControl("demo.test@gmail.com"),
      "mobile": new FormControl("9879879879"),
      "seats": new FormControl("2")
    });

    fixture.detectChanges();
  });
  describe("boundary", () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe("functional", () => {

    it('should show booked ticket details when booking is successful', () => {
      component.selectedMovie = db.movies[0];
      component.updateTotalPrice();
      component.bookTicket();
      fixture.detectChanges();

      let element = fixture.nativeElement;
      let ticketElement = element.querySelector(".ticket");
      expect(ticketElement.innerHTML).toContain(component.ticket.email)
      expect(ticketElement.innerHTML).toContain(component.ticket.mobile)
      expect(ticketElement.innerHTML).toContain(component.ticket.paid)
      expect(ticketElement.innerHTML).toContain(component.ticket.seats)
      expect(ticketElement.innerHTML).toContain(component.ticket.movieId)
    });

    it('should show user\'s email when booking is successful', () => {
      component.selectedMovie = db.movies[0];
      component.updateTotalPrice();
      component.bookTicket();
      fixture.detectChanges();

      let element = fixture.nativeElement;
      let ticketElement = element.querySelector(".ticket");
      expect(ticketElement.innerHTML).toContain(component.ticket.email)
    });

    it('should show user\'s mobile when booking is successful', () => {
      component.selectedMovie = db.movies[0];
      component.updateTotalPrice();
      component.bookTicket();
      fixture.detectChanges();

      let element = fixture.nativeElement;
      let ticketElement = element.querySelector(".ticket");
      expect(ticketElement.innerHTML).toContain(component.ticket.mobile)
    });

    it('should show ticket total amount when booking is successful', () => {
      component.selectedMovie = db.movies[0];
      component.updateTotalPrice();
      component.bookTicket();
      fixture.detectChanges();

      let element = fixture.nativeElement;
      let ticketElement = element.querySelector(".ticket");
      expect(ticketElement.innerHTML).toContain(component.ticket.paid);
    });


    it('should show total number of seats booked when booking is successful', () => {
      component.selectedMovie = db.movies[0];
      component.updateTotalPrice();
      component.bookTicket();
      fixture.detectChanges();

      let element = fixture.nativeElement;
      let ticketElement = element.querySelector(".ticket");
      expect(ticketElement.innerHTML).toContain(component.ticket.seats);
    });
  });


  describe("exception", () => {

    it('should not show ticket details when booking is failed', () => {
      component.selectedMovie = null;
      component.updateTotalPrice();
      component.bookTicket();
      fixture.detectChanges();
  
      let element = fixture.nativeElement;
      let ticketElement = element.querySelector(".ticket");
      expect(ticketElement).toBeNull();
    });
  
    it('should show error message when booking is failed', () => {
      component.selectedMovie = null;
      component.updateTotalPrice();
      component.bookTicket();
      fixture.detectChanges();
  
      let element = fixture.nativeElement;
      let errorMessageElement = element.querySelector(".error");
      expect(errorMessageElement).toBeDefined();
      expect(errorMessageElement.innerHTML).toContain("Booking failed");
    });
  
  });

});
