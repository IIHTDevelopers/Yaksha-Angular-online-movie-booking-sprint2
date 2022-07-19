import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../models/movie';
// import { MovieService } from '../_services';
import { db } from '../../assets/movie-db';

@Component({
  selector: 'app-select-movie',
  templateUrl: './select-movie.component.html',
  styleUrls: ['./select-movie.component.css']
})
export class SelectMovieComponent implements OnInit {

  movies:Movie[] = [];
  constructor(private router:Router) { }

  ngOnInit() {
    
  }

  fetchAllMovies(){
    
  }

  selectMovie(selectedMovie){
    
  }

}
