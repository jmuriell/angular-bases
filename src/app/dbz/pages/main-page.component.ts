import { name } from './../../../../node_modules/@leichtgewicht/ip-codec/types/index.d';
import { Component, OnInit } from '@angular/core';
import { ListComponent } from "../components/list/list.component";
import { AddCharacterComponent } from "../components/add-character/add-character.component";
import { Character } from '../interfaces/character.interface';
import { CommonModule } from '@angular/common';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  imports: [
    ListComponent,
    AddCharacterComponent,
    CommonModule
],
})

export class MainPageComponent  {

  constructor( private dbzService: DbzService){}

     get  characters(): Character[]{
      return [...this.dbzService.characters];
    }
onDeleteCharacter(id: string):void{
  this.dbzService.onDeleteCharacterById( id )

}
onNewCharacter(character: Character): void{
  this.dbzService.addCharacter( character );
}


}
