import { Component } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
})
export class CadastroClienteComponent {
  id: number = 0;
  nome: string = '';
  email: string = '';
  idade: number = 0;

  clientes: Cliente[] = [];

  cadastrarCliente() {
    const novoCliente = new Cliente(this.id, this.nome, this.email, this.idade);
    this.clientes.push(novoCliente);
    console.log(novoCliente);
  }
}
