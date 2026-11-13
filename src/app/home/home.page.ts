import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonButtons, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { settingsOutline, trash, create } from 'ionicons/icons';
import { TaskItemComponent } from '../components/task-item/task-item.component';
import { Productos } from '../interfaces/productos';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonButtons,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    TaskItemComponent
  ]
})
export class HomePage {
  listaDeProductos: Productos[] = [
    { id: 1, titulo: 'manzanas', completada: true, precio: 5 },
    { id: 2, titulo: 'arandanos', completada: true, precio: 2 },
    { id: 3, titulo: 'naranjas', completada: false, precio: 4 },
    { id: 4, titulo: 'albaricoques', completada: false, precio: 3.8 },
    { id: 5, titulo: 'platanos', completada: false, precio: 3 },
    { id: 6, titulo: 'granadas', completada: true, precio: 3.8 },
    { id: 7, titulo: 'aguacates', completada: false, precio: 9 },
    { id: 8, titulo: 'kiwis', completada: true, precio: 9.5 },
    { id: 9, titulo: 'peras', completada: false, precio: 6}
  ];

  constructor() {
    addIcons({ settingsOutline, trash, create });
  }
}