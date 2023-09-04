import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name: string;
  redirecTo: string;

}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  opciones : Componente[]=[   //definimos un arreglo de tipo interface Componente
   {
    icon:'body-outline',
    name:'Inicio',
    redirecTo: '/inicio'
   },  
    {
      icon: 'planet-outline',
      name:'Que es RegistrAPP?',
      redirecTo: '/card'
    },
  ]
}
