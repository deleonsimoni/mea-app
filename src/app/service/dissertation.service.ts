import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '@app/enums/api.enum';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class DissertationService {
  private api: string = `${
    environment.production ? Api.PROD : Api.DEV
  }/api/admin/completed-guidelines`;

  constructor(private readonly httpClient: HttpClient) {}

  public create(data: any, file: File) {
    const formData: FormData = new FormData();
    formData.append('fileArray', file, file.name);
    formData.append('formulario', JSON.stringify(data));

    return this.httpClient.post(this.api, formData);
  }

  public list() {
    return this.httpClient.get(this.api);
  }

  public update(data: any) {
    return this.httpClient.put(this.api, data);
  }

  public delete(id: string) {
    return this.httpClient.delete(`${this.api}/${id}`);
  }
}
