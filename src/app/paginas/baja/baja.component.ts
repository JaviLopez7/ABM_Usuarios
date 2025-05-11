import { Component } from '@angular/core';
import { UsuarioDetalleComponent } from '../usuario-detalle/usuario-detalle.component';
import { MatIconModule } from '@angular/material/icon';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../clases/usuario';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-baja',
  imports: [RouterLink ,CommonModule ,UsuarioDetalleComponent, MatIconModule],
  templateUrl: './baja.component.html',
  styleUrl: './baja.component.css'
})
export class BajaComponent {

  unUsuario!: Usuario;
  public usuarios: Array<Usuario>;

  constructor(public usuarioService: UsuarioService, public snackBar: MatSnackBar) {
    this.usuarios = this.usuarioService.Usuario;
  }

  public eliminar(id: number) {
  let confirmacion = confirm('¿Estás seguro de eliminar este usuario?');
  if (confirmacion) {
    this.usuarios = this.usuarios.filter(u => u._id !== id);
    this.usuarioService.saveUsuario(this.usuarios); // Guardar cambios en el servicio
    this.snackBar.open('Usuario eliminado correctamente', 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}

}
