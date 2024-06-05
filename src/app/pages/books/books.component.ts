import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { IBooks } from '../../models/books.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit{

  bookList: IBooks[] = []
  private _router = inject(Router)
  private _apiService = inject(ApiService)

  ngOnInit(): void {
    this._apiService.getLibros().subscribe((data: IBooks[]) =>{
      console.log(data)
      this.bookList = data;
    });
  }

  navigate(_id: string){
  this._router.navigate(['/books', _id])
}

}

