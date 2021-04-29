import { Component, OnInit } from '@angular/core';
import { ResearchProjectService } from '@app/service/research-project.service';
import { ToastrService } from 'ngx-toastr';

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
    private readonly researchProjectService: ResearchProjectService,
    private readonly toastr: ToastrService
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
        this.toastr.error();
      }
    );
  }

  public addProject(ev: any) {
    this.loading = true;

    if (ev.exist) {
      this.researchProjectService.update(ev.project).subscribe(
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
      this.researchProjectService.create(ev.project).subscribe(
        (res: any) => {
          this.listAll();
          this.toastr.success(res.message);
        },
        e => this.toastr.error()
      );
    }

    this.newProject = false;
  }

  deleteProject(id: string) {
    this.loading = true;

    this.researchProjectService.delete(id).subscribe(
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
