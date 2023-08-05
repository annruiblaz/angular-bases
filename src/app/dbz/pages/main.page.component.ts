import {Component, OnInit} from "@angular/core";
import {Character} from "../interfaces/character.interface";
import {DbzService} from "../services/dbz.service";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent implements OnInit{

  constructor( private dbzsService: DbzService) {
  }

  get characters(): Character[]{
    return [...this.dbzsService.characters];
  }

  onDeleteCharacter(id: string):void{
    this.dbzsService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character){
    this.dbzsService.addCharacter(character);
  }

  ngOnInit(): void {
  }

}
