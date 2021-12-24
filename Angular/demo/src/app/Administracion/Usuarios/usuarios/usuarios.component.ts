import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsuarioServices } from '../../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listUsuarios: any[] = [];
  accion = 'Agregar';
  form: FormGroup;
  id: number | undefined;
  
  obtenerUsuarios() {
    this._usuarioServices.getListUsuario().subscribe(_data => {
     this.listUsuarios = _data
      console.log(_data);
      
      // debugger
    }, error => {
      console.log(error);
    })
  }
  
  
  
  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private _usuarioServices: UsuarioServices) {
    
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
      area: ['', [Validators.required]],
    })
   
   }
   ngOnInit(): void {
    
    this.obtenerUsuarios();
    console.log(this.obtenerUsuarios());
  }
  guardarUsuario() {

    const usuario: any = {
      nombre: this.form.get('nombre')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
      area: this.form.get('area')?.value,
    }

    if(this.id == undefined) {
      // Agregamos una nueva tarjeta
        this._usuarioServices.saveUsuario(usuario).subscribe(_data => {
          this.toastr.success('El usuario fue registrado con exito!', 'Usuario Registrado');
          this.obtenerUsuarios();
          this.form.reset();
        }, error => {
          this.toastr.error('Opss.. ocurrio un error','Error')
          console.log(error);
        })
    }else {

      usuario.id = this.id;
      // Editamos tarjeta
      this._usuarioServices.updateUsuario(this.id,usuario).subscribe(_data => {
        this.form.reset();
        this.accion = 'Agregar';
        this.id = undefined;
        this.toastr.info('El usuario fue actualizada con exito!', 'Usuario Actualizado');
        this.obtenerUsuarios();
      }, error => {
        console.log(error);
      })

    }

   
  }

  eliminarUsuario(id: number) {
    this._usuarioServices.deleteUsuario(id).subscribe(_data => {
      this.toastr.error('El usuario fue eliminado con exito!','Usuario eliminado');
      this.obtenerUsuarios();
    }, error => {
      console.log(error);
    })

  }

  editarUsuario(usuario: any) {
    this.accion = 'Editar';
    this.id = usuario.id;

    this.form.patchValue({
      nombre: usuario.nombre,
      email: usuario.email,
      pass: usuario.pass,
      area: usuario.area
    })
  }

}
