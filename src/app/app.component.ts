import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opcionesArray = ["Opcion 1","Opcion 2","Opcion 3","Opcion 4"]
  clic(opc:number){
    alert ("Se selecciono la opción" + opc)
  }

}
