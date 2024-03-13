  import { Component, OnInit, Pipe, inject } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';
import { ServicioFamiliarService } from '../servicio-familiar.service';
import { EstiloHermanosDirective } from '../estilo-hermanos.directive';
import { MiPipePipe } from '../mi-pipe.pipe';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent, EstiloHermanosDirective, MiPipePipe, DatePipe, UpperCasePipe],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent implements OnInit{ //OnInit, para cuando se inicia el componente, ciclos de vida
  
  nombre?: string;
  fecha?: Date = new Date()

  // constructor(private _serviciofamiliar : ServicioFamiliarService){
  //   }

  //Inyectar servicio
  private _serviciofamiliar = inject(ServicioFamiliarService);

  
  ngOnInit(): void {
    this._serviciofamiliar.setHermanoGrande('juan');
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
