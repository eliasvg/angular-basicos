import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Ironman';
    edad: number = 45;
    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }
    obtenerNombre(): string {
        //return this.nombre + ' - ' + this.edad;
        return `${this.nombre} - ${this.edad}`;//AL UTILIZAR ` ES COMO UNA PLANTILLA. HACE LO MISMO QUE LA LÍNEA DE ARRIBA.
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }
    cambiarEdad(): void {
        this.edad = 30;
    }
}