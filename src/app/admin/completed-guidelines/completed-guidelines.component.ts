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
  public loading = false;

  constructor(private readonly dissertationService: DissertationService) {}

  ngOnInit() {
    this.listAll();
  }

  public listAll(): void {
    this.loading = true;

    this.dissertationService.list().subscribe(
      (dissertations: Array<Dissertation>) => {
        this.loading = false;
        this.dissertations = dissertations;
      },
      e => {
        this.loading = false;
        console.log(e);
      }
    );
  }

  public addDissertation(ev: any): void {
    this.loading = true;

    if (ev.exist) {
      this.dissertationService.update(ev.dissertation).subscribe(
        () => {
          this.loading = false;
          this.listAll();
        },
        e => {
          this.loading = false;
          console.log(e);
        }
      );
    } else {
      this.dissertationService.create(ev.dissertation, ev.filePdf).subscribe(
        () => {
          this.loading = false;
          this.listAll();
        },
        e => {
          this.loading = false;
          console.log(e);
        }
      );
    }

    this.newDissertation = false;
  }

  public deleteDissertation(id: string): void {
    this.loading = true;

    this.dissertationService.delete(id).subscribe(
      () => {
        this.loading = false;
        this.listAll();
      },
      e => {
        this.loading = false;
        console.log(e);
      }
    );
  }
}
