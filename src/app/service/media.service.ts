import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '@app/enums/api.enum';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private api: string = `${
    environment.production ? Api.PROD : Api.DEV
  }/api/admin/media`;

  constructor(private readonly httpClient: HttpClient) {}

  public create(media: any, image: File) {
    const formData = this.createFormData(media, image);

    return this.httpClient.post(this.api, formData);
  }

  public list() {
    return this.httpClient.get(this.api);
  }

  public update(media: any) {
    return this.httpClient.put(this.api, media);
  }

  public delete(id: string) {
    return this.httpClient.delete(`${this.api}/${id}`);
  }

  private createFormData(media: any, image: File): FormData {
    const formData: FormData = new FormData();
    formData.append('formulario', JSON.stringify(media));

    if (image && image.name) {
      formData.append('image', image);
    }

    return formData;
  }
}
