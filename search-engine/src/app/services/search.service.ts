import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiKey = environment.APIkey;
  url : string = '';
  result : number = 10;
  results : any = [];

  constructor(
    private http : HttpClient
  ) { }

   getResults(searchTerm: string): Observable<any> {
  
 
    this.url = `https://www.omdbapi.com/?s=${searchTerm}&apikey=${this.apiKey}`;
    console.log(this.url);
    this.result = this.result + 1;
    
    this.results =  this.http
      // .get(`https://app.zenserp.com/api/v2/search?q=${searchTerm}&pageNumber=1&pagesize=10&autoCorrect=true`,
        // .get(`https://www.omdbapi.com/?apikey=${this.apiKey}&t=${searchTerm}`,
        .get(this.url);
    
    return this.results;
    }
 
}
