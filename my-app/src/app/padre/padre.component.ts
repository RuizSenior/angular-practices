import { Component, OnInit } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent implements OnInit{
  
  nombre?: string;

  constructor(private _serviciofamiliar : ServicioFamiliarService){
    }

  
  ngOnInit(): void {
    this._serviciofamiliar.setHermanoGrande('Juan');
    this.nombre = this._serviciofamiliar.getHermanoGrande();
  }

  reciboMsg: string = '';

  recibirMsg($event: string){
    this.reciboMsg = $event;
  }


  saludar(){
    this._serviciofamiliar.saludar(this._serviciofamiliar.getHermanoPequeño() || '');
  }

  preguntar(){
    console.log(this._serviciofamiliar.preguntarPorHijo())
  }







  //CONTADOR
  valorContador = 0;
  incrementar(){
    this.valorContador++;
  }

  decrementar(){
    this.valorContador--;
  }

}
