import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-montras-component',
  imports: [RouterModule],
  templateUrl: './montras-component.html',
  styleUrl: './montras-component.scss'
})
export class MontrasComponent implements OnInit{
private httpClient = inject(HttpClient)

  data: any;

  ngOnInit() {
    this.httpClient.get<any>('https://montras-e0b2e3e29aa0.herokuapp.com/montras').subscribe(res => {
      this.data = res.posts;
    })
  }
}
