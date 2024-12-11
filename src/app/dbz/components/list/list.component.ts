import { Index } from './../../../../../node_modules/cacache/node_modules/lru-cache/dist/commonjs/index.d';
import { Template } from './../../../../../node_modules/parse5/dist/tree-adapters/default.d';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  imports: [
    CommonModule
  ]

})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

//  onDeleteId = Index value:number
  onDeleteCharacter(id?: string):void {

    if (!id) return;
    this.onDelete.emit(id );
  }

 }
