import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  @Output() msgHijo = new EventEmitter<string>();
  msg: string = '';

  sendMsg(){
    this.msgHijo.emit(this.msg)
  }


}
