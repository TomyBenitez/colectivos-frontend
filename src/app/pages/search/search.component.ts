import { Component, OnInit } from '@angular/core';
import ViajesService from 'src/app/services/viajes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  formData:any;
  viajes:any;
  viajesFiltrados:any;

  constructor(private _viajes:ViajesService) { }

  ngOnInit(): void {
    //traemos la informacion de formdata
    this.formData = this._viajes.getFormData();
    //seteo en null la info que está almacenada en mi service para evitar errores
    this._viajes.setFormData(null);

    if(this.formData){
      //si el formdata tiene info, trae todos los viajes
      this._viajes.obtenerViajes().subscribe((viajes: any) => {
        this.viajes = viajes.response;
        
        //luego los filtramos con los que coincidan con la id de mi formdata
        this.viajesFiltrados = this.viajes.filter((viaje:any) => {
          return(
            viaje.destinos.some((destino:any) => destino._id === this.formData.origen) &&
            viaje.destinos.some((destino:any) => destino._id === this.formData.destino)
          )
        })
        console.log(this.viajesFiltrados)
      })
    }
  }

}
