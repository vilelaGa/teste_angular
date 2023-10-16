import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  funcionarios: Funcionario[] = [];
  funcionariosGeral: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit(): void {
    this.funcionarioService.GetFuncionarios().subscribe((data) => {
      const dados = data.dados;

      dados.map((i) => {
        i.dataDeAlteracao = new Date(i.dataDeAlteracao!).toLocaleDateString(
          `pt-BR`
        );
        i.dataDeCriacao = new Date(i.dataDeCriacao!).toLocaleDateString(
          `pt-BR`
        );
      });

      this.funcionarios = dados;
      this.funcionariosGeral = dados;

      console.log(dados);
    });
  }

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.funcionarios = this.funcionariosGeral.filter((funcionario) => {
      return funcionario.nome.toLowerCase().includes(value);
    });
  }
}
