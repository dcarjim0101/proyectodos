import { Component } from '@angular/core';
import { Tarea } from '../interfaces/tarea';

@Component({
  selector: 'app-home',
  // ...
})
export class HomePage {

  // Esta es la propiedad que realmente usaremos (sin let)
  listaDeTareas: Tarea[] = [
    { id: 1, titulo: "Comprar el pan", completada: true },
    { id: 2, titulo: "Estudiar componentes de Angular", completada: false },
    { id: 3, titulo: "Hacer el reto de la UT2", completada: false }
  ];

  constructor() {}
  
}