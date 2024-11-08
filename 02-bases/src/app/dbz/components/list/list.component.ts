import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    //Valor por defecto
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  // onDeleteId = Index value:string
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    //TODO: Emitir el ID del personaje seleccionado

    //Si viene vacio
    if (!id) {
      return;
    }

    this.onDelete.emit(id);
  }
}
