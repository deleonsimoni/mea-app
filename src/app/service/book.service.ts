import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private api: string = 'http://localhost:8080/api/admin/book';

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
