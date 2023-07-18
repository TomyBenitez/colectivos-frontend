import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { GlobalProviderService } from 'src/app/services/global-provider.service';
import LocalidadesService from 'src/app/services/localidades.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  private localidades?: any[];
  hoyDesde: Date = new Date();
  hoyHasta: Date = new Date();
  localidades$?: Observable<any>;
  formData: any = {
    desde: '',
    hasta: '',
    idaVuelta: true
  }

  formBus=new FormGroup({
    salida: new FormControl('', Validators.required),
    destino:new FormControl('' , Validators.required),
    pasajeros:new FormControl(1, [Validators.required, Validators.minLength(1)]),
    desde:new FormControl('' , Validators.required),
    hasta:new FormControl()
  })

  get salidaControl():FormControl{
    return this.formBus.get('salida') as FormControl;
  }
  get destinoControl():FormControl{
    return this.formBus.get('destino') as FormControl;
  }
  get pasajerosControl():FormControl{
    return this.formBus.get('pasajeros') as FormControl;
  }
  get desdeControl():FormControl{
    return this.formBus.get('desde') as FormControl;
  }

  constructor( private _localidades: LocalidadesService, private _gs: GlobalProviderService, private formBuilder: FormBuilder ) {}

  get minDate(): string {
    return this.hoyDesde.toISOString().split('T')[0];
  }

  get minDateHasta(): string {
    return this.hoyHasta.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.localidades$ = this._localidades.obtenerLocalidades();
    this.localidades$.subscribe((data) => {
      this.localidades = data;
    });
  }

  formatToArray = (id:string,lat:number,lng:number,nombre:string) => {
    return {
      id,
      lat,
      lng,
      nombre
    };
  }

  emitirOrigen(datos:any){
    this._gs.emitirOrigen(
      datos.value === '' ? null : this.formatToArray(
        datos.value,
        this.localidades?.find(item => item._id === datos.value)?.latitud,
        this.localidades?.find(item => item._id === datos.value)?.longitud,
        this.localidades?.find(item => item._id === datos.value)?.nombre
      )
    );
  }

  emitirDestino(datos:any){
    this._gs.emitirDestino(
      datos.value === '' ? null : this.formatToArray(
        datos.value,
        this.localidades?.find(item => item._id === datos.value)?.latitud,
        this.localidades?.find(item => item._id === datos.value)?.longitud,
        this.localidades?.find(item => item._id === datos.value)?.nombre
      )
    );
  }

  submitForm(){
    if(this.formBus.valid){
      const jsonColectivos = {
        origen: this.formBus.value.salida,
        destino: this.formBus.value.destino,
        pasajeros: this.formBus.value.pasajeros,
        ida: this.formBus.value.desde,
        vuelta: this.formBus.value.hasta
      }

      console.log(jsonColectivos)
    }
  }
}
