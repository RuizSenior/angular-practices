import { Component, OnInit, inject } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';
import { EstiloHermanosDirective } from '../estilo-hermanos.directive';
import { MiPipePipe } from '../mi-pipe.pipe';

@Component({
  selector: 'app-hermano',
  standalone: true,
  imports: [EstiloHermanosDirective, MiPipePipe],
  templateUrl: './hermano.component.html',
  styleUrl: './hermano.component.css'
})
export class HermanoComponent implements OnInit{
  nombre?: string;

  // constructor(private _serviciofamiliar : ServicioFamiliarService)
  // {}

//Iyectar un servicio
  private _serviciofamiliar2 = inject(ServicioFamiliarService)

  ngOnInit(): void {
    this._serviciofamiliar2.setHermanoPequeño('Pedro');
    this.nombre = this._serviciofamiliar2.getHermanoPequeño();
  }

  saludar(){
    this._serviciofamiliar2.saludar(this._serviciofamiliar2.getHermanoGrande() || '')
  }

  preguntar(){
    console.log(this._serviciofamiliar2.preguntarPorHijo())
  }
}
