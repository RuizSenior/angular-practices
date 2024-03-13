import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  reciboMsg: string = '';

  recibirMsg($event: string){
    this.reciboMsg = $event;
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
