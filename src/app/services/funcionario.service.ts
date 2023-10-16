import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/Funcionario';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  private ApiUrl = `${environment.ApiUrl}/Funcionario`;

  constructor(private http: HttpClient) {}

  GetFuncionarios(): Observable<Response<Funcionario[]>> {
    return this.http.get<Response<Funcionario[]>>(this.ApiUrl);
  }
}
