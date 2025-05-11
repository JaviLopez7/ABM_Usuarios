import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private _usuarios: Array<Usuario>;

  constructor() {
    this._usuarios = JSON.parse(localStorage.getItem("usuarios") ?? '[]');
  }

  public get Usuario(): Array<Usuario> {
    return this._usuarios;
  }

  public getUsuarios(): void {
    this._usuarios = JSON.parse(localStorage.getItem("usuarios") ?? '[]')
  }

  public saveUsuario(usuarios: Array<Usuario>) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    this.getUsuarios();
  }

  
}
