import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButtons, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, IonItem } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons';
import { TaskItemComponent } from '../components/task-item/task-item.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  standalone: true,
  imports: [
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
    TaskItemComponent,
    IonItem
]
})
export class HomePage {
  constructor() {
    // Registramos el icono de ajustes que vamos a usar en la vista
    addIcons({ settingsOutline });
  }
  // ...
}