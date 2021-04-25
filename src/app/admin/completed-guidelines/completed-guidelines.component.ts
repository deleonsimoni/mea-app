import { Component, OnInit } from '@angular/core';
import { Dissertation } from '@app/models/dissertation';
import { DissertationService } from '@app/service/dissertation.service';

@Component({
  selector: 'app-completed-guidelines',
  templateUrl: './completed-guidelines.component.html',
  styleUrls: ['./completed-guidelines.component.scss']
})
export class CompletedGuidelinesComponent implements OnInit {
  public newDissertation: boolean = false;
  public dissertations: Array<Dissertation> = [];

  constructor(private readonly dissertationService: DissertationService) {}

  ngOnInit() {
    this.listAll();
  }

  public listAll(): void {
    this.dissertationService
      .list()
      .subscribe(
        (dissertations: Array<Dissertation>) =>
          (this.dissertations = dissertations)
      );
  }

  public addDissertation(ev: any): void {
    if (ev.exist) {
      this.dissertationService
        .update(ev.dissertation)
        .subscribe(() => this.listAll());
    } else {
      this.dissertationService
        .create(ev.dissertation)
        .subscribe(() => this.listAll());
    }

    this.newDissertation = false;
  }

  public deleteDissertation(id: string): void {
    this.dissertationService.delete(id).subscribe(() => this.listAll());
  }
}
