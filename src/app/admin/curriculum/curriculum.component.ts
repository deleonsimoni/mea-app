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

  constructor(private readonly curriculumService: CurriculumService) {}

  ngOnInit() {
    this.list();
  }

  list() {
    this.curriculumService.list().subscribe(success => {
      this.curriculum = success;
    });
  }

  addFormation(formation: any) {
    const curriculum = this.curriculum;

    if (formation._id) {
      const index = curriculum.formations.findIndex(
        (el: any) => el._id == formation._id
      );
      curriculum.formations[index] = formation;
    } else {
      curriculum.formations.push(formation);
    }

    this.curriculumService.update(curriculum).subscribe(() => {
      this.newFormation = false;

      setTimeout(() => {
        this.list();
      }, 500);
    });
  }

  removeFormation(id: string) {
    const curriculum = this.curriculum;
    const formations = curriculum.formations.filter((el: any) => el._id !== id);
    curriculum.formations = formations;

    this.curriculumService.update(curriculum).subscribe(() => this.list());
  }

  savePersonalData(data: any) {
    this.curriculum.name = data.name;
    this.curriculum.description = data.description;

    this.curriculumService.update(this.curriculum).subscribe();
  }

  deletePerformance(ev: any) {
    if (ev.exist) {
      this.curriculum.professionalPerformances = this.curriculum.professionalPerformances.filter(
        (el: any) => el._id != ev.id
      );

      this.curriculumService
        .update(this.curriculum)
        .subscribe(() => this.list());
    } else {
      this.newPerformance = false;
    }
  }

  updatePerformance(ev: any) {
    const index = this.curriculum.professionalPerformances.findIndex(
      (el: any) => el._id == ev._id
    );
    this.curriculum.professionalPerformances[index] = ev;

    this.curriculumService.update(this.curriculum).subscribe(x => this.list());
  }
}
