import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    searchTerm = '';

  constructor(
    private searchServices : SearchService
  ){
    this.searchServices.getResults(this.searchTerm)
    .subscribe(
     (response: any) => {
       console.log('Data - ', response);
       this.searchServices.results = response;
     },
     (error: any) => {
       console.log('Error Occured', error)
     });
  }
  

  ngOnInit(): void {
      
  }
   
  searchWeb(): void{
    if(this.searchTerm==='') return;
     this.searchServices.getResults(this.searchTerm)
     .subscribe(
      (response: any) => {
        console.log('Data - ', response);
        this.searchServices.results = response;
      },
      (error: any) => {
        console.log('Error Occured', error)
      } 
         );
  }
}
