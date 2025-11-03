import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-montra-component',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './montra-component.html',
  styleUrl: './montra-component.scss'
})
export class MontraComponent implements OnInit {
  data: any;
  scan: any;

  id!: string;
  idMontra!: string;
  private httpClient = inject(HttpClient)

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;

    this.httpClient.get<any>('https://montras-e0b2e3e29aa0.herokuapp.com/montras/' + this.id).subscribe(res => {
      this.data = res.post;
      this.idMontra = this.data.idMontra;

      this.httpClient.get<any>('https://montras-e0b2e3e29aa0.herokuapp.com/scan/' + this.idMontra).subscribe(res => {
        this.scan = res.posts;
      })
    })

  }
}
