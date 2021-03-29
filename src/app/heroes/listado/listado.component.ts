import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Iroman','Hulk','Thor','Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe(){
    console.log('borrando...');
    //this.heroes = [];
    //this.heroes.shift();//ELIMINA PRIMER ELEMENTO
    //this.heroes.pop();//ELIMINA ÚLTIMO ELEMENTO
    //const heroeBorrado = this.heroes.shift();
    //this.heroeBorrado = heroeBorrado;
    //console.log(heroeBorrado);
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
