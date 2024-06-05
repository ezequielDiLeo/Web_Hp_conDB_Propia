import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IBooks } from '../models/books.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  private urlBase: string = 'https://nodeapirestmongo-production-bd54.up.railway.app/books'

  getLibros():Observable<IBooks[]>{
    return this._http.get<IBooks[]>(this.urlBase)
  }

  getLibro(id: number):Observable<IBooks>{
    return this._http.get<IBooks>(`${this.urlBase}/${id}`)
  }
}
