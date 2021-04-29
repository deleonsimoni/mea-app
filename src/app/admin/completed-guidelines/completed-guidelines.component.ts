import { Component, OnInit } from '@angular/core';
import { Dissertation } from '@app/models/dissertation';
import { DissertationService } from '@app/service/dissertation.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-completed-guidelines',
  templateUrl: './completed-guidelines.component.html',
  styleUrls: ['./completed-guidelines.component.scss']
})
export class CompletedGuidelinesComponent implements OnInit {
  public newDissertation: boolean = false;
  public dissertations: Array<Dissertation> = [];
  public loading = false;

  constructor(
    private readonly dissertationService: DissertationService,
    private readonly toastr: ToastrService
  ) {}

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
        this.toastr.error();
      }
    );
  }

  public addDissertation(ev: any): void {
    this.loading = true;
    this.newDissertation = false;
    this.dissertations = [];

    if (ev.exist) {
      this.dissertationService.update(ev.dissertation, ev.filePdf).subscribe(
        (res: any) => {
          this.loading = false;
          this.listAll();
          this.toastr.success(res.message);
        },
        e => {
          this.loading = false;
          console.log(e);
          this.toastr.error();
        }
      );
    } else {
      this.dissertationService.create(ev.dissertation, ev.filePdf).subscribe(
        (res: any) => {
          this.loading = false;
          this.listAll();
          this.toastr.success(res.message);
        },
        e => {
          this.loading = false;
          console.log(e);
          this.toastr.error();
        }
      );
    }
  }

  public deleteDissertation(id: string): void {
    this.loading = true;

    this.dissertationService.delete(id).subscribe(
      (res: any) => {
        this.loading = false;
        this.listAll();
        this.toastr.success(res.message);
      },
      e => {
        this.loading = false;
        console.log(e);
        this.toastr.error();
      }
    );
  }
}
