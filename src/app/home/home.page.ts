import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Productos } from '../interfaces/productos';
import { TaskItemComponent } from '../components/task-item/task-item.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    TaskItemComponent,
    CommonModule
  ],
})
export class HomePage {
  listaDeProductos: Productos[] = [
    { id: 1, titulo: 'Manzanas', completada: false, precio: 2.49 },
    { id: 2, titulo: 'Plátanos', completada: false, precio: 1.79 },
    { id: 3, titulo: 'Arándanos', completada: false, precio: 3.25 },
    { id: 4, titulo: 'Cocos', completada: false, precio: 2.99 },
    { id: 5, titulo: 'Cerezas', completada: false, precio: 4.50 },
    { id: 6, titulo: 'Naranjas', completada: false, precio: 2.15 }
  ];

  get productosSeleccionados(): number {
    return this.listaDeProductos.filter((producto) => producto.completada).length;
  }
}