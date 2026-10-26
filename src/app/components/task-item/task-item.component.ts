import { Component, Input } from '@angular/core';
import { Productos } from '../../interfaces/productos';
import { IonCard, IonCheckbox } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  standalone: true,
  imports: [CommonModule, IonCard, IonCheckbox]
})
export class TaskItemComponent {

  @Input() tarea!: Productos;
}