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
  public loading = false;

  constructor(private readonly mediaService: MediaService) {}

  ngOnInit() {
    this.listAll();
  }

  public listAll(): void {
    this.loading = true;

    this.mediaService.list().subscribe(
      (media: any) => {
        this.loading = false;
        this.media = media;
      },
      e => {
        this.loading = false;
        console.log(e);
      }
    );
  }

  public deleteMedia(id: string): void {
    this.loading = true;

    this.mediaService.delete(id).subscribe(
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

  public addMedia(media: Media): void {
    this.loading = true;

    this.mediaService.create(media).subscribe(
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
