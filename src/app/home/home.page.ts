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
    { id: 3, titulo: 'naranjas', completada: false, precio: 4 }
  ];

  constructor() {
    addIcons({ settingsOutline, trash, create });
  }
}