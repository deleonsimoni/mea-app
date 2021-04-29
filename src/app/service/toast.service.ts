import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class ToastService {
  constructor(private toastr: ToastrService) {}

  public success(message: string): void {
    this.toastr.success(message, 'Sucesso: ');
  }

  public error(): void {
    this.toastr.error('Indisponibilidade temporária.', 'Erro: ');
  }
}
