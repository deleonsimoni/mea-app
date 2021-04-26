import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '@app/enums/api.enum';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ResearchProjectService {
  private api: string = `${
    environment.production ? Api.PROD : Api.DEV
  }/api/admin/research-project`;

  constructor(private readonly httpClient: HttpClient) {}

  public create(project: any) {
    return this.httpClient.post(this.api, project);
  }

  public list() {
    return this.httpClient.get(this.api);
  }

  public update(project: any) {
    return this.httpClient.put(this.api, project);
  }

  public delete(id: string) {
    return this.httpClient.delete(`${this.api}/${id}`);
  }
}
