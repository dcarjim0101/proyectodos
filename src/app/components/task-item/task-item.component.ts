import { Component, Input } from '@angular/core';
import { Productos } from '../../interfaces/productos';
import { IonCard, IonItem, IonCheckbox, IonLabel } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  standalone: true,
  imports: [CommonModule, IonCard, IonItem, IonCheckbox, IonLabel]
})
export class TaskItemComponent {

  @Input() tarea!: Productos;
}