import { Component, OnInit } from '@angular/core';
import { ResearchProjectService } from '@app/service/research-project.service';

@Component({
  selector: 'app-research-projects',
  templateUrl: './research-projects.component.html',
  styleUrls: ['./research-projects.component.scss']
})
export class ResearchProjectsComponent implements OnInit {
  public newProject: boolean = false;
  public projects: any[] = [];
  public loading = false;

  constructor(
    private readonly researchProjectService: ResearchProjectService
  ) {}

  ngOnInit() {
    this.listAll();
  }

  listAll() {
    this.loading = true;

    this.researchProjectService.list().subscribe(
      (projects: any) => {
        this.loading = false;
        this.projects = projects;
      },
      e => {
        this.loading = false;
        console.log(e);
      }
    );
  }

  public addProject(ev: any) {
    this.loading = true;

    if (ev.exist) {
      this.researchProjectService.update(ev.project).subscribe(
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
      this.researchProjectService
        .create(ev.project)
        .subscribe(() => this.listAll());
    }

    this.newProject = false;
  }

  deleteProject(id: string) {
    this.loading = true;

    this.researchProjectService.delete(id).subscribe(
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
