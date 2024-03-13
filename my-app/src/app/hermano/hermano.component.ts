import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  standalone: true,
  imports: [],
  templateUrl: './hermano.component.html',
  styleUrl: './hermano.component.css'
})
export class HermanoComponent implements OnInit{
  nombre?: string;


  constructor(private _serviciofamiliar : ServicioFamiliarService)
  {}

  ngOnInit(): void {
    this._serviciofamiliar.setHermanoPequeño('Pedro');
    this.nombre = this._serviciofamiliar.getHermanoPequeño();
  }

  saludar(){
    this._serviciofamiliar.saludar(this._serviciofamiliar.getHermanoGrande() || '')
  }

  preguntar(){
    console.log(this._serviciofamiliar.preguntarPorHijo())
  }
}
