import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent implements OnInit {
  private httpClient = inject(HttpClient)

  data: any;

  ngOnInit() {
    this.httpClient.get<any>('https://montras-e0b2e3e29aa0.herokuapp.com/montras').subscribe(res => {
      this.data = res.posts;
    })
  }
}
