import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CurriculumService } from '@app/service/curriculum.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {
  public curriculum: any;
  public newFormation: boolean;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly curriculumService: CurriculumService
  ) {}

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
    curriculum.formations.push(formation);

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
}
