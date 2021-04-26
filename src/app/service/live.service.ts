import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '@app/enums/api.enum';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class LiveService {
  private api: string = `${
    environment.production ? Api.PROD : Api.DEV
  }/api/admin/lives`;

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
