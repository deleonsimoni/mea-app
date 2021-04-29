import { Component, OnInit } from '@angular/core';
import { LiveService } from '@app/service/live.service';
import { ToastService } from '@app/service/toast.service';
import { Live } from '@ng-bootstrap/ng-bootstrap/util/accessibility/live';
import { finalize, map } from 'rxjs/operators';

@Component({
  selector: 'app-lives-edit',
  templateUrl: './lives-edit.component.html',
  styleUrls: ['./lives-edit.component.scss']
})
export class LivesEditComponent implements OnInit {
  lives: Array<Live> = [];
  formFields = ['title', 'link', 'date', 'institution'];
  public loading = false;

  constructor(
    private readonly liveService: LiveService,
    private readonly toastService: ToastService
  ) {}

  ngOnInit() {
    this.listAll();
  }

  listAll() {
    this.loading = true;
    this.liveService.list().subscribe(
      (lives: any) => {
        this.loading = false;
        this.lives = lives;
      },
      e => {
        this.loading = false;
        console.log(e);
      }
    );
  }

  public addLive(live: Live): void {
    this.loading = true;

    this.liveService
      .create(live)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        (res: any) => {
          this.toastService.success(res.message);
          this.listAll();
        },
        e => {
          this.loading = false;
          this.toastService.error();
        }
      );
  }

  public deleteLive(id: string): void {
    this.loading = true;
    this.liveService.delete(id).subscribe(
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
