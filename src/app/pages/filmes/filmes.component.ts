import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

export interface Film {
  episode_id: number;
  title: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
}

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [MatTableModule, CommonModule, HttpClientModule],
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.css',
})
export class FilmesComponent {
  displayedColumns: string[] = [
    'title',
    'episode_id',
    'opening_crawl',
    'director',
    'producer',
    'release_date',
  ];
  dataSource: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.fetchData();
  }
  fetchData(): void {
    this.http.get<any>('https://swapi.dev/api/films').subscribe((response) => {
      this.dataSource = response.results;
    });
  }
}
