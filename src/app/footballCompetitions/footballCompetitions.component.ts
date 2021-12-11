import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

interface Competition {
  name: string;
  country: string;
  year: number;
  winner: string;
  runnerup: string;
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Competition[];
}

@Component({
  selector: 'football-competitions',
  templateUrl: './footballCompetitions.component.html',
  styleUrls: ['./footballCompetitions.component.scss']
})
export class FootballCompetitions implements OnInit {

  constructor(private http: HttpClient) {
  }
counter(i: number) {
    return new Array(i);
}
  ngOnInit() {
    this.http.get('https://jsonmock.hackerrank.com/api/football_competitions?page=1').subscribe((data: any)=>{
    this.form.pageNo = data.total_pages;
    // console.log(this.form.pageNo);
    })
  }
  form = {
    data:[],
    pageNo :null
  }
checkData(page){
  this.form.data = null
  this.http.get('https://jsonmock.hackerrank.com/api/football_competitions?page='+page).subscribe((data:any) =>{
  
  this.form.data = data.data
  // console.log(this.form.data)
  })
}
}
