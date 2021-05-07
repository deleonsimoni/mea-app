import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '@app/enums/api.enum';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private api: string = `${
    environment.production ? Api.PROD : Api.DEV
  }/api/admin/book`;

  constructor(private readonly httpClient: HttpClient) {}

  public create(book: any, fileCapa: File, fileBook: File) {
    const formData = this.createFormData(book, fileCapa, fileBook);

    return this.httpClient.post(this.api, formData);
  }

  public list() {
    return this.httpClient.get(this.api);
  }

  public update(book: any, fileCapa: File, fileBook: File) {
    const formData = this.createFormData(book, fileCapa, fileBook);

    return this.httpClient.put(this.api, formData);
  }

  public delete(id: string) {
    return this.httpClient.delete(`${this.api}/${id}`);
  }

  private createFormData(book: any, fileCapa: File, fileBook: File): FormData {
    const formData: FormData = new FormData();
    formData.append('formulario', JSON.stringify(book));

    if (fileCapa && fileCapa.name) {
      formData.append('capa', fileCapa, fileCapa.name);
    }

    if (fileBook && fileBook.name) {
      formData.append('book', fileBook, fileBook.name);
    }

    return formData;
  }
}
