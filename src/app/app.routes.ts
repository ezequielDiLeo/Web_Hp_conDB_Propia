import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { BooksDetailComponent } from './pages/books-detail/books-detail.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'books', component: BooksComponent},
    {path: 'books/:id', component: BooksDetailComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'},

];
