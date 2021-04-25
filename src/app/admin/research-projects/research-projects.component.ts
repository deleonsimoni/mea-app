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

  constructor(
    private readonly researchProjectService: ResearchProjectService
  ) {}

  ngOnInit() {
    this.listAll();
  }

  listAll() {
    this.researchProjectService
      .list()
      .subscribe((projects: any) => (this.projects = projects));
  }

  public addProject(ev: any) {
    if (ev.exist) {
      this.researchProjectService
        .update(ev.project)
        .subscribe(() => this.listAll());
    } else {
      this.researchProjectService
        .create(ev.project)
        .subscribe(() => this.listAll());
    }
  }

  deleteProject(id: string) {
    this.researchProjectService.delete(id).subscribe(() => this.listAll());
  }
}
