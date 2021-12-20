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

  
  ngOnInit(): void {
    
    this.obtenerUsuarios();
    console.log("se esta cargando");
  }
  
  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private _usuarioServices: UsuarioServices) {
    
    this.form = this.fb.group({
      nombre_usuario: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
   
   }



  obtenerUsuarios() {
    this._usuarioServices.getListUsuario().subscribe(_data => {
     this.listUsuarios = _data
      console.log(_data);
      
      // debugger
    }, error => {
      console.log(error);
    })
  }

  guardarUsuario() {

    const tarjeta: any = {
      nombre_usuario: this.form.get('nombre_usuario')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    }

    if(this.id == undefined) {
      // Agregamos una nueva tarjeta
        this._usuarioServices.saveUsuario(tarjeta).subscribe(_data => {
          this.toastr.success('La tarjeta fue registrada con exito!', 'Tarjeta Registrada');
          this.obtenerUsuarios();
          this.form.reset();
        }, error => {
          this.toastr.error('Opss.. ocurrio un error','Error')
          console.log(error);
        })
    }else {

      tarjeta.id = this.id;
      // Editamos tarjeta
      this._usuarioServices.updateUsuario(this.id,tarjeta).subscribe(_data => {
        this.form.reset();
        this.accion = 'Agregar';
        this.id = undefined;
        this.toastr.info('La tarjeta fue actualizada con exito!', 'Tarjeta Actualizada');
        this.obtenerUsuarios();
      }, error => {
        console.log(error);
      })

    }

   
  }

  eliminarUsuario(id: number) {
    this._usuarioServices.deleteUsuario(id).subscribe(_data => {
      this.toastr.error('La tarjeta fue eliminada con exito!','Tarjeta eliminada');
      this.obtenerUsuarios();
    }, error => {
      console.log(error);
    })

  }

  editarUsuario(usuario: any) {
    this.accion = 'Editar';
    this.id = usuario.id;

    this.form.patchValue({
      nombre_usuario: usuario.nombre_usuario,
      numeroTarjeta: usuario.numeroTarjeta,
      fechaExpiracion: usuario.fechaExpiracion,
      cvv: usuario.cvv
    })
  }

}
