import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';

// 1. Importa la función y los iconos que necesites
import { addIcons } from 'ionicons';
import { trash, create } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    // 2. Llama a addIcons en el constructor con un objeto de los iconos
    addIcons({ trash, create });
  }
}