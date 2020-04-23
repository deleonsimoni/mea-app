import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() {}
  comboMenu: any = [
    {
      id: 1,
      nome: 'About'
    },
    {
      id: 2,
      nome: 'Projeto'
    }
  ];
  ngOnInit() {}
}
