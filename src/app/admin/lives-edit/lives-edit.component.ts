import { Component, OnInit } from '@angular/core';
import { LiveService } from '@app/service/live.service';
import { Live } from '@ng-bootstrap/ng-bootstrap/util/accessibility/live';

@Component({
  selector: 'app-lives-edit',
  templateUrl: './lives-edit.component.html',
  styleUrls: ['./lives-edit.component.scss']
})
export class LivesEditComponent implements OnInit {
  lives: Array<Live> = [];
  formFields = ['title', 'link', 'date', 'institution'];

  constructor(private readonly liveService: LiveService) {}

  ngOnInit() {
    this.listAll();
  }

  listAll() {
    this.liveService.list().subscribe((lives: any) => (this.lives = lives));
  }

  public addLive(live: Live): void {
    this.liveService.create(live).subscribe(
      () => {
        this.listAll();
      },
      e => console.log(e)
    );
  }

  public deleteLive(id: string): void {
    this.liveService.delete(id).subscribe(
      () => {
        this.listAll();
      },
      e => console.log(e)
    );
  }
}
