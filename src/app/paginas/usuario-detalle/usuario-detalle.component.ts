import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-detalle',
  imports: [CommonModule],
  templateUrl: './usuario-detalle.component.html',
  styleUrl: './usuario-detalle.component.css'
})
export class UsuarioDetalleComponent {

  @Input('miAtributo')
  public miUsuario: Usuario = new Usuario();
  
  @Input() mostrarBotonEditar: boolean = true;

  @Output() edita = new EventEmitter<number>();

  public editar() {
    this.edita.emit(this.miUsuario._id);
  }

}
