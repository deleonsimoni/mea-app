import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormationComponent } from './formation/formation.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { PersonalApresentationComponent } from './personal-apresentation/personal-apresentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfessionalPerformanceComponent } from './professional-performance/professional-performance.component';
import { AddTransmitionComponent } from './add-transmition/add-transmition.component';
import { ListTransmitionsComponent } from './list-transmitions/list-transmitions.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ProjectComponent } from './project/project.component';
import { DissertationComponent } from './dissertation/dissertation.component';
import { BookComponent } from './book/book.component';
import { ProfileLinksComponent } from './profile-links/profile-links.component';

@NgModule({
  declarations: [
    FormationComponent,
    AddFormationComponent,
    PersonalApresentationComponent,
    ProfessionalPerformanceComponent,
    AddTransmitionComponent,
    ListTransmitionsComponent,
    ProjectComponent,
    DissertationComponent,
    BookComponent,
    ProfileLinksComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PaginationModule.forRoot()
  ],
  exports: [
    FormationComponent,
    AddFormationComponent,
    PersonalApresentationComponent,
    ProfessionalPerformanceComponent,
    AddTransmitionComponent,
    ListTransmitionsComponent,
    ProjectComponent,
    DissertationComponent,
    BookComponent,
    ProfileLinksComponent
  ]
})
export class CustomComponentsModule {}
