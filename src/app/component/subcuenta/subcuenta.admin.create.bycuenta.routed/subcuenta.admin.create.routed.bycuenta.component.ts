import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CalendarModule } from 'primeng/calendar';
import { CALENDAR_ES } from '../../../environment/environment';
import { PrimeNGConfig } from 'primeng/api';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ISubcuenta } from '../../../model/subcuenta.interface';
import { SubcuentaService } from '../../../service/subcuenta.service';
import { ActivatedRoute } from '@angular/router';  // Importar ActivatedRoute
import { CuentaService } from '../../../service/cuenta.service';
declare let bootstrap: any;

@Component({
  selector: 'app-subcuenta-admin-create-routed-bycuenta',
  templateUrl: './subcuenta.admin.create.routed.bycuenta.component.html',
  styleUrls: ['./subcuenta.admin.create.routed.bycuenta.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterModule,
    CalendarModule
  ],
})
export class SubcuentaAdminCreateRoutedByCuentaComponent implements OnInit {

  id: number = 0;  // Para almacenar el id de la URL
  osubcuentaForm: FormGroup | undefined = undefined;
  osubcuenta: ISubcuenta | null = null;
  strMessage: string = '';
  myModal: any;

          
  codigo: string = '';     // Código de la cuenta
  descripcion: string = ''; // Descripción de la cuenta

  constructor(
    private oSubcuentaService: SubcuentaService,
    private oRouter: Router,
    private oPrimeconfig: PrimeNGConfig,
    private oActivatedRoute: ActivatedRoute,  // Inyectar ActivatedRoute
    private cuentaService: CuentaService
  ) {}

  ngOnInit() {
    this.createForm();
    this.oPrimeconfig.setTranslation(CALENDAR_ES);
    
    // Obtener el parámetro 'id' de la URL
    this.oActivatedRoute.params.subscribe(params => {
      this.id = +params['id'];  // Convertir el parámetro a número
      this.osubcuentaForm?.controls['id_cuenta'].setValue(this.id);  // Asignar el id al campo 'id_cuenta'
  
      this.cuentaService.get(this.id).subscribe({
        next: (cuenta) => {
          this.codigo = cuenta.codigo;           // Asignar código de la cuenta
          this.descripcion = cuenta.descripcion; // Asignar descripción de la cuenta
        },
        error: (err) => {
          console.error('Error al obtener la cuenta', err);
        }
      });
    });
  
    this.osubcuentaForm?.markAllAsTouched();
  }
  
  createForm() {
    this.osubcuentaForm = new FormGroup({
      codigo: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
      ]),
      descripcion: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255),
      ]),
      id_cuenta: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
      ]),
      momentstamp: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  updateForm() {
    this.osubcuentaForm?.controls['codigo'].setValue('');
    this.osubcuentaForm?.controls['descripcion'].setValue('');
    this.osubcuentaForm?.controls['id_cuenta'].setValue('');
    this.osubcuentaForm?.controls['momentstamp'].setValue('');
  }

  showModal(mensaje: string) {
    this.strMessage = mensaje;
    this.myModal = new bootstrap.Modal(document.getElementById('mimodal'), {
      keyboard: false,
    });
    this.myModal.show();
  }

  onReset() {
    this.updateForm();
    return false;
  }

  hideModal = () => {
    this.myModal.hide();
    this.oRouter.navigate(['/admin/subcuenta/view/' + this.osubcuenta?.id]);
  };

  onSubmit() {
    if (this.osubcuentaForm?.invalid) {
      this.showModal('Formulario inválido');
      return;
    } else {
      this.oSubcuentaService.create(this.osubcuentaForm?.value).subscribe({
        next: (osubcuenta: ISubcuenta) => {
          this.osubcuenta = osubcuenta;
          this.showModal('subcuenta creada con el id: ' + this.osubcuenta.id);
        },
        error: (err) => {
          this.showModal('Error al crear el subcuenta');
          console.log(err);
        },
      });
    }
  }
}
