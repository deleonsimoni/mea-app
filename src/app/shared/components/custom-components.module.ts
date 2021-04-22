import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormationComponent } from './formation/formation.component';
import { AddFormationComponent } from './add-formation/add-formation.component';

@NgModule({
  declarations: [FormationComponent, AddFormationComponent],
  imports: [CommonModule],
  exports: [FormationComponent, AddFormationComponent]
})
export class CustomComponentsModule {}
