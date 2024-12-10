import { Component } from '@angular/core';

@Component({
  //app-heroes-list
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
 public name: string = 'ironman';
 public age: number = 45;
 public method: string = 'velocidad';
 public capitalization: number = 45;

 get capitalazedName(): string{

  return this.name.toUpperCase();
 }
 getHeroDescription():string{

    return `${this.name} - ${this.age}`;
 }
 changeHero(): void{
  this.name = 'Spiderman'


 }
 changeAge(): void{
  this.age = 50

 }

 resetForm(): void{
  this.name = 'ironman';
  this.age = 45
 }

}
