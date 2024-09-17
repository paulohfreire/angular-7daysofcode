import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface Film {
  episode_id: number;
  title: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
}

const FILM_DATA: Film[] = [
  {
    episode_id: 4,
    title: 'A New Hope',
    opening_crawl:
      'It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empires\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empires\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy...',
    director: 'George Lucas',
    producer: 'Gary Kurtz, Rick McCallum',
    release_date: '1977-05-25',
  },
  {
    episode_id: 5,
    title: 'The Empire Strikes Back',
    opening_crawl:
      'It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....',
    director: 'Irvin Kershner',
    producer: 'Gary Kurtz, Rick McCallum',
    release_date: '1980-05-17',
  },
  {
    episode_id: 6,
    title: 'Return of the Jedi',
    opening_crawl:
      'Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...',
    director: 'Richard Marquand',
    producer: 'Howard G. Kazanjian, George Lucas, Rick McCallum',
    release_date: '1983-05-25',
  },
];

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [MatTableModule],
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
  dataSource = FILM_DATA;
}
