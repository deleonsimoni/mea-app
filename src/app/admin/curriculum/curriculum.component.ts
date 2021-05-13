import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '@app/service/curriculum.service';
import { ToastService } from '@app/service/toast.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {
  public curriculum: any;
  public newFormation: boolean;
  public newPerformance: boolean;
  public loading = false;

  constructor(
    private readonly curriculumService: CurriculumService,
    private readonly toastr: ToastService
  ) {}

  ngOnInit() {
    this.list();
  }

  list() {
    this.loading = true;

    this.curriculumService.list().subscribe(
      success => {
        this.loading = false;
        this.curriculum = success;
      },
      e => {
        this.loading = false;
        console.log(e);
        this.toastr.error();
      }
    );
  }

  addFormation(formation: any) {
    this.loading = true;

    const curriculum = this.curriculum;

    if (formation._id) {
      const index = curriculum.formations.findIndex(
        (el: any) => el._id == formation._id
      );
      curriculum.formations[index] = formation;
    } else {
      curriculum.formations.push(formation);
    }

    this.curriculumService.update(curriculum).subscribe(
      (res: any) => {
        this.loading = false;
        this.newFormation = false;
        this.toastr.success(res.message);

        setTimeout(() => {
          this.list();
        }, 500);
      },
      e => {
        this.loading = false;
        console.log(e);
        this.toastr.error();
      }
    );
  }

  removeFormation(id: string) {
    this.loading = true;

    const curriculum = this.curriculum;
    const formations = curriculum.formations.filter((el: any) => el._id !== id);
    curriculum.formations = formations;

    this.curriculumService.update(curriculum).subscribe(
      (res: any) => {
        this.loading = false;
        this.list();
        this.toastr.success(res.message);
      },
      e => {
        this.loading = false;
        console.log(e);
        this.toastr.error();
      }
    );
  }

  savePersonalData(data: any) {
    this.loading = true;

    this.curriculum.name = data.name;
    this.curriculum.description = data.description;

    this.curriculumService.update(this.curriculum).subscribe(
      (res: any) => {
        this.loading = false;
        this.toastr.success(res.message);
      },
      e => {
        this.loading = false;
        console.log(e);
        this.toastr.error();
      }
    );
  }

  deletePerformance(ev: any) {
    if (ev.exist) {
      this.curriculum.professionalPerformances = this.curriculum.professionalPerformances.filter(
        (el: any) => el._id != ev.id
      );

      this.curriculumService.update(this.curriculum).subscribe(
        (res: any) => {
          this.loading = false;
          this.list();
          this.toastr.success(res.message);
        },
        e => {
          this.loading = false;
          console.log(e);
          this.toastr.error();
        }
      );
    } else {
      this.newPerformance = false;
    }
  }

  updatePerformance(ev: any) {
    this.loading = true;
    this.newPerformance = false;

    if (ev.exist) {
      const index = this.curriculum.professionalPerformances.findIndex(
        (el: any) => el._id == ev.data._id
      );
      this.curriculum.professionalPerformances[index] = ev.data;
    } else {
      this.curriculum.professionalPerformances.push(ev.data);
    }

    this.curriculumService.update(this.curriculum).subscribe(
      (x: any) => {
        this.loading = false;
        this.list();
        this.toastr.success(x.message);
      },
      e => {
        this.loading = false;
        console.log(e);
        this.toastr.error();
      }
    );
  }

  public saveProfileLink(ev: any): void {
    this.loading = true;

    this.curriculumService.update({ profileLinks: ev }).subscribe(
      (res: any) => {
        this.loading = false;
        this.toastr.success(res.message);
      },
      e => {
        this.loading = false;
        console.log(e);
        this.toastr.error();
      }
    );
  }

  public deleteProfileLink(ev: any): void {
    this.loading = true;

    this.curriculumService.update({ profileLinks: ev }).subscribe(
      (res: any) => {
        this.loading = false;
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
