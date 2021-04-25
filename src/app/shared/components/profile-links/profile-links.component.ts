import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-links',
  templateUrl: './profile-links.component.html',
  styleUrls: ['./profile-links.component.scss']
})
export class ProfileLinksComponent {
  @Input() profileLinks: any = [];
  @Output() saveLink: EventEmitter<any> = new EventEmitter();
  @Output() deleteLink: EventEmitter<any> = new EventEmitter();

  public linkForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.linkForm = this.formBuilder.group({
      label: [null, Validators.required],
      link: [null, Validators.required]
    });
  }

  public addLink(): void {
    if (this.linkForm.valid) {
      this.profileLinks.push(this.linkForm.getRawValue());
      this.saveLink.emit(this.profileLinks);
    }
  }

  public deleteLinkProfile(index: number): void {
    this.profileLinks.splice(index, 1);
    this.deleteLink.emit(this.profileLinks);
  }
}
