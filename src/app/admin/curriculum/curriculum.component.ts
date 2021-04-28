import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CurriculumService } from '@app/service/curriculum.service';

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

  constructor(private readonly curriculumService: CurriculumService) {}

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
      () => {
        this.loading = false;
        this.newFormation = false;

        setTimeout(() => {
          this.list();
        }, 500);
      },
      e => {
        this.loading = false;
        console.log(e);
      }
    );
  }

  removeFormation(id: string) {
    this.loading = true;

    const curriculum = this.curriculum;
    const formations = curriculum.formations.filter((el: any) => el._id !== id);
    curriculum.formations = formations;

    this.curriculumService.update(curriculum).subscribe(
      () => {
        this.loading = false;
        this.list();
      },
      e => {
        this.loading = false;
        console.log(e);
      }
    );
  }

  savePersonalData(data: any) {
    this.loading = true;

    this.curriculum.name = data.name;
    this.curriculum.description = data.description;

    this.curriculumService.update(this.curriculum).subscribe(
      () => (this.loading = false),
      e => {
        this.loading = false;
        console.log(e);
      }
    );
  }

  deletePerformance(ev: any) {
    if (ev.exist) {
      this.curriculum.professionalPerformances = this.curriculum.professionalPerformances.filter(
        (el: any) => el._id != ev.id
      );

      this.curriculumService.update(this.curriculum).subscribe(
        () => {
          this.loading = false;
          this.list();
        },
        e => {
          this.loading = false;
          console.log(e);
        }
      );
    } else {
      this.newPerformance = false;
    }
  }

  updatePerformance(ev: any) {
    this.loading = true;

    const index = this.curriculum.professionalPerformances.findIndex(
      (el: any) => el._id == ev._id
    );
    this.curriculum.professionalPerformances[index] = ev;

    this.curriculumService.update(this.curriculum).subscribe(
      x => {
        this.loading = false;
        this.list();
      },
      e => {
        this.loading = false;
        console.log(e);
      }
    );
  }

  public saveProfileLink(ev: any): void {
    this.loading = true;

    this.curriculumService.update({ profileLinks: ev }).subscribe(
      () => (this.loading = false),
      e => {
        this.loading = false;
        console.log(e);
      }
    );
  }

  public deleteProfileLink(ev: any): void {
    this.loading = true;

    this.curriculumService.update({ profileLinks: ev }).subscribe(
      () => (this.loading = false),
      e => {
        this.loading = false;
        console.log(e);
      }
    );
  }
}
