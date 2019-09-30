import { Component } from '@angular/core';
import { Endereco } from './endereco';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 endereco: Endereco= new Endereco ();

  constructor(private http: HttpClient) {}

   prencher(){
     this.http.get<Endereco>("https://viacep.com.br/ws/"+ this.endereco.cep+"/json/").subscribe(
       (dados)=> this.endereco = dados
     );
   }
}
