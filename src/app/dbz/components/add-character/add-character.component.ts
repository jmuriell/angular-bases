import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
imports: [
  FormsModule
]
})
export class AddCharacterComponent {

  @Output()
onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name:'',
    power: 0
  };

emitCharacter(): void  {
  console.log(this.character);
if( this.character.name.length === 0 ) return;
  this.onNewCharacter.emit(this.character);

  this.character ={name:'', power:0};
  /*this.character.name = '';
  this.character.power = 0;*/
}

}
