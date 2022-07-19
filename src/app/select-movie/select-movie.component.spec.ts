import { HttpTestingController } from '@angular/common/http/testing';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { doesNotThrow } from 'assert';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { Movie } from '../models/movie';
import { MovieService } from '../_services/movie.service';

import { SelectMovieComponent } from './select-movie.component';

describe('SelectMovieComponent', () => {
  let component: SelectMovieComponent;
  let fixture: ComponentFixture<SelectMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectMovieComponent, BreadcrumbComponent],
      imports: [RouterTestingModule],
      providers: [MovieService]
    })
      .compileComponents();

    fixture = await TestBed.createComponent(SelectMovieComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });
  describe("boundary", () => {
    it('should be created', () => {
      expect(component).toBeTruthy();
    });
  });
  describe("functional", () => {
    it('should fetch all movies', () => {
      spyOn(component, 'fetchAllMovies');
      component.ngOnInit();
      fixture.detectChanges();
      expect(component.movies).toBeDefined();
      expect(component.movies.length).toBeGreaterThan(0);
      expect(component.movies[0].id).toBeGreaterThan(0);
    });


  });
});
