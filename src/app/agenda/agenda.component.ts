import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  agenda = [
    {
      mes: 'Outubro'
    },
    {
      mes: 'Outubro'
    },
    {
      mes: 'Outubro'
    },
    {
      mes: 'Outubro'
    },
    {
      mes: 'Outubro'
    },
    {
      mes: 'Outubro'
    }
  ];
}
