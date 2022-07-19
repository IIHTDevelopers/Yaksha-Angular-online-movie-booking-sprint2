import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private m:Movie = null;

  host:string = "http://localhost:6565/movies";

  constructor(private http:HttpClient) { }

  getAllMovies(){
    
  }

  set movie(m:Movie){
   
  }
  get movie(){
    return null ;
  }


}
