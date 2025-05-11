import { Component } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { UsuarioDetalleComponent } from '../usuario-detalle/usuario-detalle.component';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-modificar',
  imports: [RouterModule, CommonModule, MatIconModule, UsuarioDetalleComponent],
  templateUrl: './modificar.component.html',
  styleUrl: './modificar.component.css'
})
export class ModificarComponent {
  unUsuario!: Usuario;
  public usuarios: Array<Usuario>;

  constructor(public route: Router, public usuarioService: UsuarioService) {
    this.usuarios = this.usuarioService.Usuario;
  }

  public editar(id: number) {
    this.route.navigateByUrl("alta/" + id.toString());
  }
}
