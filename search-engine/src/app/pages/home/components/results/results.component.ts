import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
 
  constructor(
    public searchServices : SearchService
  ){
    console.log(" In Results", this.searchServices.results);
  }



}
