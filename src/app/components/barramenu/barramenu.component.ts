import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'boot-barramenu',
  templateUrl: './barramenu.component.html',
  styleUrls: ['./barramenu.component.css']
})
export class BarramenuComponent {
@Input()opciones!:string[];
@Input()colorfondo!:string;
@Output() clicOpcion = new EventEmitter();
constructor(){}
ngOnInit():void{}
clic(index:number):void{
  this.clicOpcion.emit(index);
} 
}
