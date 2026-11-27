import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonButtons, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, IonInput, IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, ToastController, AlertController } from '@ionic/angular';
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
    IonInput,
    IonList,
    IonItem,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle
]
})
export class HomePage {
  agregarProducto() {
    throw new Error('Method not implemented.');
  }

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

  // Nueva propiedad: un objeto Productos para enlazar con el formulario
  public nuevoProducto: Productos = {
    id: 0, // Daremos un ID real al añadirla
    titulo: "", // Enlazaremos esto al input
    completada: false // Valor por defecto
    ,
    precio: 0
  };

  // 2. Inyectamos los tres controladores en el constructor
  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    // private modalController: ModalController
  ) {
    addIcons({ settingsOutline, trash, create });
  }

  // nuevoProducto: Productos;
  
  agregarTarea() {
    // Verificamos que el título no esté vacío
    if (this.nuevoProducto.titulo.trim().length === 0) {
      return; // No hacemos nada si está vacío
    }

    // Creamos una copia del objeto para añadir a la lista
    // Le asignamos un ID único y usamos el título del formulario
    const tareaParaAnadir: Productos = {
      ...this.nuevoProducto, // Copia las propiedades existentes (titulo, completada)
      id: Date.now()     // Asigna un nuevo ID
    };

    // Añadimos la nueva tarea al principio del array
    this.listaDeProductos.unshift(tareaParaAnadir);

    // Reseteamos el objeto del formulario para la siguiente tarea
    this.nuevoProducto = { id: 0, titulo: "", completada: false, precio: 0 };
  }

  // IMPLEMENTANDO TOASTS
  async mostrarToast() {
    const toast = await this.toastController.create({
      message: '¡Hola! Esto es una notificación Toast.',
      duration: 2000, // Se cierra solo a los 2 segundos
      position: 'bottom', // 'top', 'middle', 'bottom'
      color: 'success',   // Color del tema (opcional)
      buttons: ['OK']     // Botón de cierre opcional
    });
    await toast.present();
  }

  // IMPLEMENTANDO ALERTAS
  // Alerta informativa simple
  async mostrarAlertaSimple() {
    const alert = await this.alertController.create({
      header: 'Información',
      subHeader: 'Mensaje importante',
      message: 'Esto es una alerta que requiere atención.',
      buttons: ['Entendido']
    });
    await alert.present();
  }

  // Alerta de confirmación con lógica
  async mostrarAlertaConfirmacion() {
    const alert = await this.alertController.create({
      header: '¿Estás seguro?',
      message: 'Esta acción no se puede deshacer.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel', // Cierra la alerta sin más
          handler: () => { console.log('Cancelado'); }
        },
        {
          text: 'Eliminar',
          role: 'confirm',
          handler: () => { 
            console.log('Confirmado: Elemento eliminado');
            // Aquí llamaríamos a la lógica de borrado
          }
        }
      ]
    });
    await alert.present();
  }

  
}