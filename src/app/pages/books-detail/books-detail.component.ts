import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IBooks } from '../../models/books.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books-detail.component.html',
  styleUrl: './books-detail.component.css'
})


export class BooksDetailComponent implements OnInit {

  public books?: IBooks;

  constructor(private _route: ActivatedRoute, private _apiService: ApiService) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: any) => {
      this._apiService.getLibro(params['id']).subscribe((data: IBooks) => {
        this.books = data; //añado la data de books.title o demas
        console.log(data);
      });
    });
  }
}
