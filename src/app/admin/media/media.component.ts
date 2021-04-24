import { Component, OnInit } from '@angular/core';
import { Media } from '@app/models/media';
import { MediaService } from '@app/service/media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  media: Array<Media> = [];
  formFields: Array<string> = ['title', 'link', 'image', 'type'];

  constructor(private readonly mediaService: MediaService) {}

  ngOnInit() {
    this.listAll();
  }

  public listAll(): void {
    this.mediaService.list().subscribe((media: any) => (this.media = media));
  }

  public deleteMedia(id: string): void {
    this.mediaService.delete(id).subscribe(
      () => {
        this.listAll();
      },
      e => console.log(e)
    );
  }

  public addMedia(media: Media): void {
    this.mediaService.create(media).subscribe(
      () => {
        this.listAll();
      },
      e => console.log(e)
    );
  }
}
