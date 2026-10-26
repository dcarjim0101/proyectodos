import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemComponent } from './task-item.component';

describe('TaskItemComponent', () => {
  let component: TaskItemComponent;
  let fixture: ComponentFixture<TaskItemComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskItemComponent);
    component = fixture.componentInstance;
    component.tarea = {
      id: 1,
      titulo: 'Manzanas',
      completada: false,
      emoji: '🍎',
      descripcion: 'Crujientes y jugosas',
      precio: 2.49
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the fruit name and price', () => {
    expect(fixture.nativeElement.textContent).toContain('Manzanas');
    expect(fixture.nativeElement.textContent).toContain('2.49');
  });
});
