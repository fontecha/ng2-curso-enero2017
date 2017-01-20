import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs/Rx';

@Injectable()
export class BooksService {

  constructor(private http: Http) { }

  getBooks(title: string) {

    let url = "https://www.googleapis.com/books/v1/volumes?q=intitle:" + title;

    return this.http.get(url)
      .map(response => this.extractTitles(response))
      .catch(error => Observable.throw('Server error'));
  }

  private extractTitles(response: Response) {
    return response.json().items.map(book => book.volumeInfo.title)
  }
}