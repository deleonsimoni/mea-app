import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '@env/.env';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LiveService {
  private api: string = `${env.serverUrl}/api/admin/lives`;

  constructor(private readonly httpClient: HttpClient) {}

  public create(live: any) {
    return this.httpClient.post(this.api, live);
  }

  public list() {
    return this.httpClient.get(this.api);
  }

  public update(live: any) {
    return this.httpClient.put(this.api, live);
  }

  public delete(id: string) {
    return this.httpClient.delete(`${this.api}/${id}`);
  }
}
