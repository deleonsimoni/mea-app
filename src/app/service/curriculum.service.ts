import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '@app/enums/api.enum';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  private api: string = `${
    environment.production ? Api.PROD : Api.DEV
  }/api/admin/curriculum`;

  constructor(private readonly httpClient: HttpClient) {}

  list() {
    return this.httpClient
      .get(this.api)
      .pipe(map(curriculuns => curriculuns[0]));
  }

  public update(curriculum: any) {
    return this.httpClient.put(this.api, curriculum);
  }
}
