import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '@env/.env';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private api: string = `${env.serverUrl}/api/admin/media`;

  constructor(private readonly httpClient: HttpClient) {}

  public create(media: any) {
    return this.httpClient.post(this.api, media);
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
}
